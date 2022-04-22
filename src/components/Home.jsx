import React, { useState, useEffect } from "react";
import Search from "./Search";
import MainContent from "./MainContent";
import Axios from "../apis/Axios";
const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let client_id = "Iv1.8fab848122a7e6c5";
        let client_secret = "68ed8f7c00786dfb861b1cf63668e047b33392cf";
        let users = await Axios.get(
          `/users/shashikunal?Client_id${client_id}&Client_secret${client_secret}`
        );

        let ReposData = await Axios.get(
          `/users/shashikunal/repos?Client_id${client_id}&Client_secret${client_secret}`
        );
        setLoading(true);
        setUser(users.data);
        setRepos(ReposData.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  let onTermSubmit = async term => {
    try {
      let client_id = "Iv1.8fab848122a7e6c5";
      let client_secret = "68ed8f7c00786dfb861b1cf63668e047b33392cf";
      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );

      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(ReposData.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
