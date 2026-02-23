import { useEffect, useReducer, useCallback, FormEvent } from "react";

import "./styles.css";

const i18n = {
  title: "Hacker News Jobs Board",
  loading: "Loading...",
  error: "Uh oh, something went wrong",
  loadMore: "Load more jobs",
  jobsListEmpty: "There are currently no jobs available",
};

const JOB_POSTING_IDS_URL =
  "https://hacker-news.firebaseio.com/v0/jobstories.json";
const JOB_DETAILS_URL = "https://hacker-news.firebaseio.com/v0/item";
const PAGE_SIZE = 6;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const fetchIds = async () => {
  const response = await fetch(JOB_POSTING_IDS_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fecth jobs ids");
  }

  return response.json();
};

const fetchJobDetails = async (id: string) => {
  const ITEM_URL = `${JOB_DETAILS_URL}/${id}.json`;

  const response = await fetch(ITEM_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
};

type JobDetails = {
    by: string
  id: number
  score: number
  time: number
  title: string
  type: string
  url?: string
}

type JobBoardState = {
  loading: boolean
  loadingMore: boolean
  cursor: number
  jobPostingIds: number[]
  jobPostings: JobDetails[]
  hasMore: boolean
  error: string
}

type JobBoardAction = 
  | { type: "loading"; payload: boolean }
  | { type: "loading-more"; payload: boolean }
  | { type: "load-postings-ids"; payload: { jobIds: number[]; initialJobsDetails: JobDetails[] } }
  | { type: "update-job-list"; payload: JobDetails[] }
  | { type: "error", payload: string }

const initialState: JobBoardState = {
  loading: false,
  loadingMore: false,
  cursor: 0,
  jobPostingIds: [],
  jobPostings: [],
  hasMore: true,
  error: "",
};

const jobStoriesReducer = (state: JobBoardState, action: JobBoardAction) => {
  const { type, payload } = action;

  switch (type) {
    case "loading":
      return {
        ...state,
        loading: payload,
      };
    case "loading-more":
      return {
        ...state,
        loadingMore: payload,
      };
    case "load-postings-ids":
      return {
        ...state,
        cursor: PAGE_SIZE,
        jobPostingIds: payload.jobIds,
        jobPostings: payload.initialJobsDetails,
        hasMore: payload.jobIds.length >= PAGE_SIZE,
      };
    case "update-job-list":
      return {
        ...state,
        jobPostings: [...state.jobPostings, ...payload],
        cursor: state.jobPostings.length + PAGE_SIZE,
        hasMore: state.jobPostingIds.length >= state.jobPostings.length + PAGE_SIZE,
      };
    case "error":
      return {
        ...state,
        error: "Failed to fetch the data",
      };
    default: {
      return state;
    }
  }
};

type TitleProps = {
  url: string | undefined
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ url, children }) => {
  if (!url) {
    return <h4>{children}</h4>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <h4>{children}</h4>
    </a>
  );
};

export default function App() {
  const [state, dispatch] = useReducer(jobStoriesReducer, initialState);
  const {
    loading,
    loadingMore,
    cursor,
    jobPostingIds,
    jobPostings,
    error,
    hasMore,
  } = state;

  const loadBatch = useCallback(async (ids: number[]) => {
    return Promise.all(ids.map((id) => fetchJobDetails(`${id}`)));
  }, []);

  useEffect(() => {
    const fetchJobStories = async () => {
      dispatch({ type: "loading", payload: true });

      try {
        const jobIds = await fetchIds();

        const hasJobs = jobIds.length > 0;
        if (!hasJobs) return;

        const firstBatch = jobIds.slice(cursor, PAGE_SIZE);
        const initialJobsDetails = await loadBatch(firstBatch);

        dispatch({
          type: "load-postings-ids",
          payload: { jobIds, initialJobsDetails },
        });
      } catch (err) {
        dispatch({ type: "error", payload: `Error: ${err}` });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    };

    fetchJobStories();
  }, []);

  const handleLoadMore = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch({ type: "loading-more", payload: true });

      const batchEnd = cursor + PAGE_SIZE;
      const nextBatch = jobPostingIds.slice(cursor, batchEnd);
      const nextJobs = await loadBatch(nextBatch);

      dispatch({ type: "update-job-list", payload: nextJobs });
    } catch (err) {
      dispatch({ type: "error", payload: `Error ${err}` });
    } finally {
      dispatch({ type: "loading-more", payload: false });
    }
  };

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date(timestamp));
  };

  const hasJobStories = jobPostingIds.length > 0;

  if (loading) return <h3>{i18n.loading}</h3>;
  if (error) return <h3>{i18n.error}</h3>;

  return (
    <form onSubmit={handleLoadMore}>
      <h2 className="title">{i18n.title}</h2>
      {loading && <p>{i18n.loading}</p>}
      {!loading && !hasJobStories && <p>{i18n.jobsListEmpty}</p>}
      {!loading && error && <p>{i18n.error}</p>}
      {jobPostings.map((job) => (
        <div key={job.id} className="container">
          <Title url={job.url}>{job.title}</Title>
          <p>
            By {job.by} {formatDate(job.time)}
          </p>
        </div>
      ))}
      {loadingMore &&
        Array.from({ length: 5 }).map((_element, i) => (
          <div key={`${i}-${Math.random()}`} className="skeleton"></div>
        ))}
      {hasMore && (
        <button
          className={`load-more-button ${loadingMore && "disabled-button"}`}
          disabled={loadingMore}
        >
          {loadingMore ? i18n.loading : i18n.loadMore}
        </button>
      )}
    </form>
  );
}
