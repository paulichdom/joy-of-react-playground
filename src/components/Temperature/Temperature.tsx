import styled from 'styled-components';
import useSWR from 'swr';

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-temperature';

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint);
  const json = await response.json();

  return json;
}

function Temperature() {
  const { data, error } = useSWR(ENDPOINT, fetcher);

  console.log(data, error);

  return (
    <Paragraph>
      Current temperature:
      {typeof data?.temperature === 'number' && (
        <TemperatureSpan>{data.temperature}°C</TemperatureSpan>
      )}
    </Paragraph>
  );
}

export default Temperature;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  background-color: lightseagreen;
  border-radius: 8px;
  padding: 16px;
`;

const TemperatureSpan = styled.span`
  display: block;
  font-size: 3rem;
`;
