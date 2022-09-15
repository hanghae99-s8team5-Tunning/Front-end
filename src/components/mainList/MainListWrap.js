import React from "react";
import TodaysWeatherCollections from "./TodaysWeatherCollections";
import RecommendedCollections from "./RecommendedCollections";
import FamousCollections from "./FamousCollections";
import RecentCollections from "./RecentCollections";
import styled from "styled-components";

const MainListWrap = () => {
  const todaysWeatherCategoryId = "631e7d7a4ae4c133c405a965"; //오늘 날씨에 추천하는
  const recommendedCategoryId = "631e7d7a4ae4c133c405a966"; // 바로 지금 추천하는
  const famousCategoryId = "6319aeebd1e330e86bbade9f"; //인기있는
  const recentCategoryId = "631e7d7a4ae4c133c405a964"; //새로운

  return (
    <>
      <Layout>
        <TodaysWeatherCollections categoryId={todaysWeatherCategoryId} />
        <RecommendedCollections categoryId={recommendedCategoryId} />
        <FamousCollections categoryId={famousCategoryId} />
        <RecentCollections categoryId={recentCategoryId} />
      </Layout>
    </>
  );
};

export default MainListWrap;
const Layout = styled.div`
  padding-bottom: 5rem;
`;
