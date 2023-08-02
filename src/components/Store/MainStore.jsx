import { useState } from "react";
import CardProducts from "../../components/Home/CardProducts";
import gr1 from "../../images/gr.svg";
import gr2 from "../../images/gr2.svg";
import gr3 from "../../images/gr3.svg";
import gr4 from "../../images/gr4.svg";

const MainStore = () => {
  const [grid, setgrid] = useState(3);
  return (
    <div className="col-9 ">
      <div className="filter-sort-grid ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-10">
            <p className="mb-0 ">Sort By:</p>
            <select name="" className="form-control form-select" id="">
              <option value="manual">Featured</option>
              <option value="best-selling" selected="selected">
                Best Selling
              </option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-dsascending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-dsascending">Price, high to low</option>
              <option value="created-ascending">Created, old to new</option>
              <option value="created-dsascending">Created, old to new</option>
            </select>
          </div>

          <div className="grid d-flex align-items-center  gap-1">
            <p className="totalProducts mb-0">21 Products</p>
            <div className="d-flex gap-10 align-items-center">
              <img
                src={gr4}
                alt="gr1"
                className={
                  grid === 3 ? "d-block active img-fluid" : "d-block  img-fluid"
                }
                onClick={() => setgrid(3)}
              />
              <img
                src={gr3}
                alt="gr1"
                className={
                  grid === 4 ? "d-block active img-fluid" : "d-block  img-fluid"
                }
                onClick={() => setgrid(4)}
              />
              <img
                src={gr2}
                alt="gr1"
                className={
                  grid === 6 ? "d-block active img-fluid" : "d-block  img-fluid"
                }
                onClick={() => setgrid(6)}
              />
              <img
                src={gr1}
                alt="gr1"
                className={
                  grid === 12
                    ? "d-block active img-fluid"
                    : "d-block  img-fluid"
                }
                onClick={() => setgrid(12)}
              />
            </div>
          </div>
        </div>
        <div className="products-list d-flex flex-wrap pb-2">
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
          <CardProducts grid={grid} />
        </div>
      </div>
    </div>
  );
};

export default MainStore;
