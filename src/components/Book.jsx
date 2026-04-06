function Book(){
    return(
        <>
            {/* book section */}
  <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action="">
              <div>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div>
                <select className="form-control nice-select wide"  defaultValue="option1">
                  <option value="option1" disabled>
                    How many persons?
                  </option>
                  <option value="option2">
                    2
                  </option>
                  <option value="option3">
                    3
                  </option>
                  <option value="option4">
                    4
                  </option>
                  <option value="option5">
                    5
                  </option>
                </select>
              </div>
              <div>
                <input type="date" className="form-control" />
              </div>
              <div className="btn_box">
                <button>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
            <div id="googleMap">
              <iframe
      title="map"
      width="100%"
      height="400"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.35196272633!2d-73.97950600000001!3d40.697141499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1775281673901!5m2!1sen!2sin"
    ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end book section */}

        </>
    );
}

export default Book;