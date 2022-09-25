import React from "react";
import SearchWrap from "../components/features/search/SearchWrap";
import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import SearchHeaders from "../components/features/search/SearchHeader";
import StickyButtons from "../components/common/StickyButtons";

const SearchPage = () => {
  return (
    <Layout>
      <SearchHeaders />
      <SearchWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default SearchPage;
