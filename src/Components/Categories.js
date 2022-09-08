import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <h1 className="categoriesHeading">
        Find among the categories that suits you best
      </h1>
      <div className="CategoriesDiv">
        <div>
          <Link to="/shop">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9fe7c0144474811.628d15bf7f65b.jpeg"
              alt=".."
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Link>

          <h2 className="categoriesHeading">Delicious Sweets</h2>
        </div>
        <div>
          <Link to="/shop">
            <img
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="..."
              style={{ width: "86%", borderRadius: "10px" }}
            />
          </Link>

          <h2 className="categoriesHeading">Mouthwatering Cakes</h2>
        </div>
        <div>
          <Link to="/shop">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/113456149829887.62ee878a480f7.jpg"
              alt="..."
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Link>

          <h2 className="categoriesHeading">Lavish Gift Hampers</h2>
        </div>
      </div>
    </>
  );
}
