import React from "react";
import { GithubContainer } from "./GithubStyle";
import NumberFormat from "react-number-format";

function Github({ data }) {
  return (
    <GithubContainer>
      <div className="profile-wrapper">
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${data.owner.avatar_url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "10%",
            marginRight: "1rem",
          }}
        ></div>
        <div className="profile-content">
          <div className="descriptions">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          <div className="details">
            <p>
              Stars:
              <NumberFormat
                value={data.stargazers_count}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
                renderText={(value) => (
                  <span style={{ marginLeft: "4px" }}>{value}</span>
                )}
              />
              K
            </p>
            <p>
              Forks:
              <NumberFormat
                value={data.forks_count}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
                renderText={(value) => (
                  <span style={{ marginLeft: "4px" }}>{value}</span>
                )}
              />
            </p>
            <p>Submitted 30days ago by {data.owner.login}</p>
          </div>
        </div>
      </div>
    </GithubContainer>
  );
}

export default Github;
