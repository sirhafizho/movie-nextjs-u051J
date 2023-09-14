"use client";

import { useState } from "react";
import Image from "next/image";
import playButton from "../../assets/images/play_button.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "react-datetime-picker/dist/DateTimePicker.css";

export default function MoviesHome() {
  const [initialDate, setInitialDate] = useState(new Date());
  const [afterDate, setAfterDate] = useState(new Date());

  return (
    <>
      <div className="container hero-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <Image
              className="hero-image-logo"
              priority
              src={playButton}
              alt="Play Button Logo"
            />
          </div>
          <div className="col">
            <div className="h3 text-white hero-header-resp">
              Search your movies here!
            </div>
            <div className="search-movie-form pcari-form mt-2">
              <div className="row g-2 gy-3">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <AiOutlineSearch size={21} />
                    </span>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Movie Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="datetime-local" className="form-control" />
                </div>
                <div className="col-md-6">
                  <input type="datetime-local" className="form-control" />
                </div>
                <div className="col-md-6">
                  <button className="btn pcari-button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
