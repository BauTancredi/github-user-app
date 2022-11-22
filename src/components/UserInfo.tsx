import React from "react";

type UserInfoProps = {
  user: any;
};

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="container info mt-3">
      <div className="row">
        <div className="col img text-center pt-5">
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{ width: "60%", borderRadius: "50%" }}
          />
        </div>
        <div className="col-8 p-3 pt-5">
          <div className="name d-flex justify-content-between align-items-center mb-2">
            <h3 className="name">The octocat</h3>
            <p className="bio">Joined 22 Jan 2011</p>
          </div>
          <p className="username mb-4">@octocat</p>
          <p className="bio">The user has no bio</p>
          <div className="stats d-flex justify-content-between p-3 my-4">
            <div className="repos">
              <p className="stat">Repos</p>
              <p className="stat-number">0</p>
            </div>
            <div className="followers">
              <p className="stat">Followers</p>
              <p className="stat-number">0</p>
            </div>
            <div className="following">
              <p className="stat">Following</p>
              <p className="stat-number">0</p>
            </div>
          </div>
          <div className="container extra-info p-0">
            <div className="row">
              <div className="col">
                <div className="location d-flex align-items-center mb-3">
                  <i className="bi-geo-alt-fill"></i>
                  <p className="location">Earth</p>
                </div>
                <div className="blog d-flex align-items-center">
                  <i className="bi-link-45deg"></i>
                  <p className="blog">
                    <a href="www.github.com" target="_blank">
                      www.github.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="twitter d-flex align-items-center mb-3">
                  <i className="bi-twitter"></i>
                  <p className="twitter">
                    <a href="www.twitter.com" target="_blank">
                      @octocat
                    </a>
                  </p>
                </div>
                <div className="company d-flex align-items-center">
                  <i className="bi-building"></i>
                  <p className="company">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
