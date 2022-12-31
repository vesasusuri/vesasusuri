import "./styles/ide.scss";
import React from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiPhp } from "react-icons/di";
import { SiJavascript, SiMysql } from "react-icons/si";

function Ide() {
  return (
    <div className="divIdesFlex">
      <p className="pIdeFlex">let's .code( ) with us!</p>
      <div class="hTML">
        <div class="bODY">
          <div class="illustration-editor">
            <div class="code-blocks">
              <div class="code code-html">
                <header>
                  <AiFillHtml5 className="iconHtml" />
                  <h1>HTML</h1>
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                      fill="#4C4F5A"
                    />
                  </svg>
                </header>
                <div class="code-content">
                  <div className="codee">
                    <span class="c-r">&lt;div</span>
                    <span class="c-y"> id</span>
                    <span class="c-w">=</span>
                    <span class="c-g">"DigiLab"</span>
                    <span class="c-r">&gt;<span class="startCoding">{"Start Coding"}</span>&lt;/div&gt;</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="code code-css">
              <header>
                <DiCss3 className="cssLogo" />
                <h1>CSS</h1>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                    fill="#4C4F5A"
                  />
                </svg>
              </header>
              <div class="code-content codeC1">
                <div className="codee">
                  <p class="line-1">
                    <span class="c-y">&#x2a; </span><span class="c-o">&#x7b;</span>
                  </p>
                  <br />
                  <p class="line-2">
                    <span class="c-p"></span>
                    <span>DigiLab</span>:<span class="c-y">Start Working</span>
                  </p>
                  <br />
                  <p class="line-3">
                    <span class="c-o">&#x7d;</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="code code-js">
              <header>
                <SiJavascript className="jsLogo" />
                <h1>JS</h1>
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                    fill="#4C4F5A"
                  />
                </svg>
              </header>
              <div class="code-content">
                <div className="codee">
                  <br />
                  <span class="c-b">document.getElementsById</span><span class="c-y">("DigiLab")</span>
                  <span class="c-g"></span> <span class="c-g"></span>
                  <span class="c-g"></span>
                  <br />
                  <br />
                  <span class="c-c">console.log</span>
                  <span class="c-y">(<span class="c-b">Started grow up</span>)</span> <span class="c-b">;</span>
                </div>
              </div>
            </div>

            {/* <div class="code-blocks">
              <div class="code code-php">
                <header>
                  <DiPhp className="phpLogo" />
                  <h1 class="phptext">PHP</h1>
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                      fill="#4C4F5A"
                    />
                  </svg>
                </header>
                <div class="code-content">
                  <div className="codee">
                    <span class="c-r"></span>ADS <span class="c-y">Almir</span>
                    <span class="c-w">44</span>
                    <span class="c-g">66</span>
                    <span class="c-r">22</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="code-blocks">
              <div class="code code-mysql">
                <header>
                  <SiMysql className="mysqlLogo" />
                  <h1 class="phptext">MYSQL</h1>
                  <svg
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.7089 7.65105L14.8704 2.02908C15.1112 1.80937 15.2528 1.51212 15.2528 1.18902C15.2528 0.865913 15.1112 0.56866 14.8704 0.348951C14.6296 0.129241 14.3038 0 13.9497 0C13.5956 0 13.2698 0.129241 13.029 0.348951L7.75989 5.1567L2.49077 0.348951C2.24998 0.129241 1.9242 0 1.57009 0C1.21598 0 0.890202 0.129241 0.649409 0.336026C0.380287 0.568659 0.252808 0.878837 0.252808 1.18902C0.252808 1.48627 0.380286 1.78352 0.621079 2.02908C2.23581 3.51535 6.42844 7.3538 6.71173 7.6252L6.74006 7.65105C7.24998 8.11632 8.19898 8.11632 8.7089 7.65105Z"
                      fill="#4C4F5A"
                    />
                  </svg>
                </header>
                <div class="code-content">
                  <div className="codee">
                    <span class="c-r"></span>ADS <span class="c-y">Almir</span>
                    <span class="c-w">44</span>
                    <span class="c-g">66</span>
                    <span class="c-r">22</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="editor-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ide;
