import Image from "next/image";
import ImgWhite1 from "../components/img/white1.jpg";
import ImgTesti1 from "../components/img/testi1.jpg";
import ImgTesti2 from "../components/img/testi2.jpg";
import ImgTest3 from "../components/img/test3.jpg";
export default function Testimonial() {
  return (
    <section>
      <section class="bg-light py-5 py-xl-8">
        <div class="container-lg">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">
                Happy Customers
              </h2>
              <p class="display-5 mb-4 mb-md-5 text-center">
                We deliver what we promise. See what clients are expressing
                about us.
              </p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-4 gy-md-0 gx-xxl-5">
            <div class="col-12 col-md-4">
              <div class="card border-0 border-bottom border-primary shadow-sm">
                <div class="card-body p-4 p-xxl-5 text-center">
                  <figure>
                    <Image
                      class="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={ImgTesti1}
                    />
                    <figcaption>
                      <div
                        class="bsb-ratings text-warning mb-3"
                        data-bsb-star="5"
                        data-bsb-star-off="0"
                      ></div>
                      <blockquote class="bsb-blockquote-icon mb-4">
                        Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                        euismod massa, at aliquet erat turpis quis diam. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos.
                      </blockquote>
                      <h4 class="mb-2">Luna John</h4>
                      <h5 class="fs-6 text-secondary mb-0">UX Designer</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card border-0 border-bottom border-primary shadow-sm">
                <div class="card-body p-4 p-xxl-5 text-center">
                  <figure>
                    <Image
                      class="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={ImgTesti2}
                      height={100}
                      width={100}
                      alt=""
                    />
                    <figcaption>
                      <div
                        class="bsb-ratings text-warning mb-3"
                        data-bsb-star="4"
                        data-bsb-star-off="1"
                      ></div>
                      <blockquote class="bsb-blockquote-icon mb-4">
                        Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                        euismod massa, at aliquet erat turpis quis diam. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos.
                      </blockquote>
                      <h4 class="mb-2">Mark Smith</h4>
                      <h5 class="fs-6 text-secondary mb-0">
                        Marketing Specialist
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card border-0 border-bottom border-primary shadow-sm">
                <div class="card-body p-4 p-xxl-5 text-center">
                  <figure>
                    <Image
                      class="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={ImgTest3}
                      height={100}
                      width={100}
                      alt=""
                    />
                    <figcaption>
                      <div
                        class="bsb-ratings text-warning mb-3"
                        data-bsb-star="5"
                        data-bsb-star-off="0"
                      ></div>
                      <blockquote class="bsb-blockquote-icon mb-4">
                        Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                        euismod massa, at aliquet erat turpis quis diam. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos.
                      </blockquote>
                      <h4 class="mb-2">Luke Reeves</h4>
                      <h5 class="fs-6 text-secondary mb-0">Sales Manager</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
