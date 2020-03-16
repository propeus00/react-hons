import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsSearch from "../../components/ResultsSearch/ResultsSearch";
import Axios from "../../axios";

import "./Home.css";
export class Home extends Component {
  state = {
    users: [],
    searchInput: "",
    loadingSpinner: false
  };

  onChange = input => {
    console.log("Select key here ", input.key);
    var value = input.target.value;
    if (input.key === "Enter") {
      this.setState({ loadingSpinner: true });
      console.log("here input value ", input.target.value);
      input.preventDefault();
      Axios.get("search/" + input.target.value).then(response => {
        console.log("response ", this.state.users);
        this.setState(
          { users: response.data, searchInput: value, loadingSpinner: false },
          () => console.log("set state updated")
        );
      });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.searchInput !== nextState.searchInput ||
      nextState.loadingSpinner === true || this.state.searchInput == nextState.searchInput
    ) {
      console.log("shoould com update, ", nextState);
      return true;
    }
    console.log("shoould com update false", this.state.loadingSpinner);
    return false;
  }

  componentDidUpdate() {
    console.log("componenet did update");
  }

  render() {
    console.log("render+++");
    var results;
    var loading;
    if (this.state.loadingSpinner || this.state.users.length < 0) {
      loading = "Loading...";
      results = "";
    } else {
      loading = "";
    }
    if (this.state.users.length > 0 && this.state.loadingSpinner === false) {
      console.log("render method here", this.state.users);

      results = this.state.users.map(result => {
        return (
          <ResultsSearch
            key={result.userId}
            title={result.title}
            name={result.fullName}
            project={result.totalProjectsNumber}
            skills={result.skills + " "}
          />
        );
      });
    }

    return (
      <>
        <SearchBar change={value => this.onChange(value)}></SearchBar>
        {loading}
        {results}
      </>
    );
  }
}
