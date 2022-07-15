import React, { useEffect, useState } from "react";
import Github from "../components/Github/Github";
import axios from "axios";
import Head from "next/head";
import { BeatLoader } from "react-spinners";

function Git() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=created:>2022-04-13&sort=stars&order=desc"
      );
      const data = await response.data.items;
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
    <div>
      <Head>
        <title>Github</title>
      </Head>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BeatLoader
            sizeUnit={"px"}
            size={20}
            color={"#fff"}
            loading={loading}
          />
        </div>
      ) : (
        data.map((item) => <Github key={item.id} data={item} />)
      )}
    </div>
  );
}

export default Git;
