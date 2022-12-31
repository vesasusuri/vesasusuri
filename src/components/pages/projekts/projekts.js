import "./styles/projekts.scss";
import React, { useState } from "react";
import $ from "jquery";

function Projekts() {
  return (
    <>
    <p className="htmlprojects">.htmlProjects( )</p>
      <ul class="cards">
        <li>
          <div class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Name Of Student</h3>
                  <span class="card__status">Name Of Project</span>
                </div>
              </div>
              <p class="card__description">
                <a href="#" class="linkOfProjekt">
                  Link Of Project
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Name Of Student</h3>
                  <span class="card__status">Name Of Project</span>
                </div>
              </div>
              <p class="card__description">
                <a href="#" class="linkOfProjekt">
                  Link Of Project
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Name Of Student</h3>
                  <span class="card__status">Name Of Project</span>
                </div>
              </div>
              <p class="card__description">
                <a href="#" class="linkOfProjekt">
                  Link Of Project
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Name Of Student</h3>
                  <span class="card__status">Name Of Project</span>
                </div>
              </div>
              <p class="card__description">
                <a href="#" class="linkOfProjekt">
                  Link Of Project
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Projekts;
