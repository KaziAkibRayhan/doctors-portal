import React from "react";
import featured from "../../../images/featured.png";
const FeatureService = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
            <div className="col-md-5 mb-4 m-md-0">
                <img className="img-fluid" src={featured} alt=""/>
            </div>
            <div className="col-md-7 align-self-center">
                <h1>Exceptional Dental Care,<br/> On Your Terms</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi reprehenderit provident perspiciatis similique distinctio sapiente repudiandae non ullam sint reiciendis.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
