import formatDate from "../utils/formatDate";

type UserInfoProps = {
  user: any;
};

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="container info mt-3 p-2">
      <div className="row">
        <div className="col-12 col-md-4 img text-center pt-5">
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{ width: "60%", borderRadius: "50%" }}
          />
        </div>
        <div className="col-12 col-md-8 p-3 pt-5">
          <div className="name d-flex justify-content-between align-items-center mb-2">
            <h3 className="name">{user.name}</h3>
            <p className="bio">Joined {formatDate(user.created_at)}</p>
          </div>
          <p className="username mb-4 mt-2">@{user.login}</p>
          <p className="bio">{user.bio ? user.bio : "The user has no bio"}</p>
          <div className="stats d-flex justify-content-between p-3 my-4">
            <div className="repos">
              <p className="stat">Repos</p>
              <p className="stat-number">{user.public_repos}</p>
            </div>
            <div className="followers">
              <p className="stat">Followers</p>
              <p className="stat-number">{user.followers}</p>
            </div>
            <div className="following">
              <p className="stat">Following</p>
              <p className="stat-number">{user.following}</p>
            </div>
          </div>
          <div className="container extra-info p-0">
            <div className="row">
              <div className="col-12 col-md-6">
                <div
                  className={`location d-flex align-items-center mb-3 ${
                    !user.location ? "disabled" : ""
                  }`}
                >
                  <i className="bi-geo-alt-fill"></i>
                  <p className="location">
                    {user.location ? user.location : "Not Available"}
                  </p>
                </div>
                <div
                  className={`blog d-flex align-items-center ${
                    !user.blog ? "disabled" : ""
                  }`}
                >
                  <i className="bi-link-45deg"></i>
                  <p
                    className="blog"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "150px",
                    }}
                  >
                    <a href={`//${user.blog}`} target="_blank">
                      {user.blog ? user.blog : "Not Available"}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className={`twitter d-flex align-items-center mb-3 ${
                    !user.twitter_username ? "disabled" : ""
                  }`}
                >
                  <i className="bi-twitter"></i>
                  <p className="twitter">
                    <a
                      href={`//www.twitter.com/${user.twitter_username}`}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {user.twitter_username
                        ? `@${user.twitter_username}`
                        : "Not Available"}
                    </a>
                  </p>
                </div>
                <div
                  className={`company d-flex align-items-center ${
                    !user.company ? "disabled" : ""
                  }`}
                >
                  <i className="bi-building"></i>
                  <p className="company">
                    {user.company ? user.company : "Not Available"}
                  </p>
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
