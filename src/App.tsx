import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { public_key, service_id, template_id } from "./components/email_js";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { phone } from "./components/phone"
import { Fade } from "react-awesome-reveal";

function App() {
  const [loading, set_loading] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form:any = useRef(null);

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    set_loading(true)
    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          toast("Message Sent Successfully", { type: "success" });
          form.current.reset()
        },
        (error) => {
          console.log(error)
          toast("Message Not Sent", { type: "error" });

        },
      ).finally(()=>{
        set_loading(false)
      })
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="sticky-top d-flex align-items-center justify-content-between  bg-white p-2">
        <div>
          <img src="https://ngratesc.sirv.com/Raine/favicon.png" width={"50px"} className="img-fluid" alt="logo" />
        </div>
        <div>
          <a href="https://raineuplift1.zohobookings.com/#/raineuplift" target="_blank"><button className="btn p_btn shadow">Book Now</button></a>
        </div>
      </div>
      <div className={"min-vh-100 d-flex align-items-center text-center justify-content-center"}>
        <div className="overlay">

        </div>
        <video src="https://ngratesc.sirv.com/Raine/6750890-hd_1920_1080_25fps.mp4" autoPlay loop muted />
        <div className={"vid_con d-flex flex-column justify-content-center"}>
          <div>
            <img src="https://ngratesc.sirv.com/Raine/logo_header.png" width={200} className="img-fluid" />
            <h1 className="display-1 text-center">Rediscover Your<br /> <span className="gradient-text"> Best Self</span><br /></h1>
            <a href="https://raineuplift1.zohobookings.com/#/raineuplift" target="_blank"><button className="text-center p_btn btn shadow">Book Now</button></a>
          </div>
        </div>
      </div>
      <div className="container">
      <Fade cascade={true}>
        <div className="row  align-items-center justify-content-center mt-5">
          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/Raine/12934.jpg" className="img-fluid rounded" alt="Person being messaged" />
          </div>
          <div className="col-sm text-md-start text-center">
            <h1 className="display-1 gradient-text">Our Story</h1>
            <p>Welcome to Raine Uplift, a sanctuary for health, beauty, and wellness. Nestled in the heart of Harare, our spa is more than just a place to relax—it’s where transformation begins. Founded by Lorraine Mombeyarara, a CIDESCO-qualified wellness consultant, Raine Uplift is dedicated to nurturing the body, mind, and spirit through a 360-degree wellness experience.</p>
            <p>At Raine Uplift, we inspire and empower our clients to achieve self-actualization. From personalized wellness plans to luxurious spa treatments, every experience is designed to rejuvenate, repair, and replenish. Our dedicated team of passionate wellness consultants is here to guide you on your journey to healthier living.</p>
          </div>
        </div>
        </Fade>
        <div className={"mt-5 "}>
          <div className={"text-center"}>
            <div>
              <h1 className="display-1 gradient-text">Our Services</h1>

            </div>
            <div className="row gap-3 mt-3 mb-3">
              <div className="col-sm shadow rounded p-2 mb-2 gradient-bg-card">
                <Fade direction="down" cascade={true}>	
                <img src="https://ngratesc.sirv.com/Raine/12885.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Skin, Body & Beauty Treatments</p>
                <small> Indulge in tailored therapies that leave you glowing and refreshed.</small>
                </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/full-shot-woman-training-mat.jpg" className="img-thumbnail rounded" />

                <p className="fw-bold gradient-text">Fitness Training</p>
                <small>Build strength and endurance with programs designed to suit your lifestyle.</small>
              </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/16953.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Diet & Nutritional Counseling</p>
                <small>Achieve your health goals with expert dietary advice.</small>
              </Fade>
              </div>
            </div>
            <div className="row gap-3 mt-3 mb-3">
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/2150356700.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Physical Therapy</p>
                <small>Restore balance and vitality through targeted therapeutic care.</small>
                </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/10010%20(1).jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Weight Loss Programs</p>
                <small>Embark on a sustainable path to your ideal self.</small>
                </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/2149622606.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Children's Wellness Programs</p>
                <small>Set the foundation for lifelong health and happiness.</small>
                </Fade>
              </div>
            </div>
            <a href={`https://wa.me/${phone}?text=Can i get more information about the services you offer`}><button className="btn p_btn mt-1 mb-1">Learn More</button></a>

          </div>
        </div>
        
        <div className=" mt-5 mb-5">
          <Fade cascade={true}>
          <div className="text-center">
            <h1 className="display-1 gradient-text">Corporate Wellness</h1>
            <p className="gradient-text">Partnership • Performance • Productivity</p>
            <p>Raine Uplift provides innovative wellness solutions to improve employee health and productivity. We focus on workplace wellness and risk management, reducing absenteeism and promoting preventative care. Our holistic approach supports organizations and employees, helping individuals thrive and perform at their best. After all, happy employees are a business's greatest asset.</p>
              <a href="mailto:info@raineuplift.co.zw?subject=Info on Corporate Wellness"><button className="btn p_btn mt-2 mb-3">Learn More</button></a>
            <img src="https://ngratesc.sirv.com/Raine/2150468529.jpg" className="img-fluid rounded" />
          </div>
          </Fade>
        </div>
        <Fade>
        <div className=" mt-5 mb5 row align-items-center">
          <div className="col-sm text-md-start text-center">
            <h1 className="display-1 gradient-text">The Wellness Academy</h1>
            <p className="gradient-text"><i>Empower A <b>Woman</b> Empower A Nation</i></p>
            <p>Raine Uplift aims to deliver high quality wellness
              education to lower unemployment, improve
              overall gross domestic product and long term
              sustainability in Zimbabwe. The Academy not
              only trains young mind at entry level but also
              working personnel for continuous improvement
              through various support programs. Special
              attention being given to the marginalized
              communities with main goal being to empower
              the girl child.</p>
              <a href={`https://wa.me/${phone}?text=Can i get more information about the Wellness Academy`}><button className="btn p_btn mt-1 mb-1">Learn More</button></a>

          </div>
          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/Raine/2148387781.jpg" className="img-fluid rounded" alt="wellness academy" />
          </div>
        </div>
        </Fade>
        <Fade>
        <div className=" mt-5 mb5 row align-items-center">
          <div className="col-sm text-md-start text-center">
            <h1 className="display-1 gradient-text">Wellness Warehouse</h1>
            <p>Our passion for healing and wellness has inspired
              us to formulate The wellness warehouse which is
              a convenient hub for all wellness products to
              increase accessibility for our clients.</p>
              <a href={`https://wa.me/${phone}?text=Can i get more information about the Wellness Warehouse`}><button className="btn p_btn mt- mb-3">Learn More</button></a>
          </div>
          <div className="col-sm order-md-first">
            <img src="https://ngratesc.sirv.com/Raine/2147817694.jpg" className="img-fluid rounded" alt="wellness academy" />
          </div>
        </div>
        </Fade>
        <Fade>
        <div className="mt-5 mb-5 text-center">
            <h1 className="gradient-text display-1">Strategic Partnerships</h1>
            <p>At Raine Uplift, we pride ourselves on collaborating with top professionals in the industry to design and implement wellness routines that enhance both the quality and longevity of life. Our trusted network of partners brings unmatched expertise and dedication to holistic health. This esteemed group includes naturopathic doctors, dentists, psychotherapists, nutritionists, personal trainers, and medical doctors. Together, we ensure that every wellness plan is tailored to meet individual needs, empowering our clients to live healthier, more fulfilling lives.</p>
            <a href={`mailto:info@raineuplift.co.zw?subject=Partner with Raine Uplift`}><button className="btn p_btn mb-3">Partner With Us</button></a>

        </div>
        </Fade>

        <div className="mt-5 mb-5 row">
           
            <div className="col-sm">
                <h1 className="display-1 gradient-text text-md-start text-center">Contact Us</h1>
                <form onSubmit={sendEmail} ref={form}>
                  <div className="mb-2" >
                    <span>Full Name</span>
                    <input type="text" className="form-control" name="name" placeholder="Jane Doe" />
                  </div>
                  <div className="mb-2">
                    <span>Email</span>
                    <input type="email" className="form-control" name="email" placeholder="jane@doe.com"/>
                  </div>
                  <div className="mb-2">
                    <span>Contact Number</span>
                    <input type="tel" className="form-control" name="message" placeholder="+263 ** *** ***" />
                  </div>
                  <div className="mb-2">
                    <span>Messgae</span>
                    <textarea  className="form-control" name="message" placeholder="Your message" />
                  </div>
                  <div className="text-md-start text-center mb-3">
                    <button type="submit" disabled={loading} className="btn p_btn">Send</button>
                  </div>
                </form>
            </div>
            <div className="col-sm order-md-first">
            <iframe className="img-fluid w-100 h-100 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.788239905304!2d31.018060773998943!3d-17.777048083178116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931af9fb5925da3%3A0xbd6494bf53e5643!2sRaine%20Uplift%20Wellness%20Centre!5e1!3m2!1sen!2szw!4v1737378462088!5m2!1sen!2szw"    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

      </div>
      <div className="container d-flex flex-row flex-wrap justify-content-evenly gap-5 mt-5">
          <div className=" text-md-start text-center mb-3">
            <p className="gradient-text">Get In Touch</p>
            <div className="d-flex flex-column">
              <span><i className="bi bi-geo-alt me-1"></i>56 Lomagundi, Avondale, Harare</span>
              <span><i className="bi bi-telephone me-1"></i>+263 718 662 907 | +263 772 537 086 </span>
              <span><i className="bi bi-envelope me-1"></i><a href="mailto:info@raineuplift.co.zw">info@raineuplift.co.zw</a></span>
            </div>
          </div>
          <div className="text-md-start text-center mb-3 justify-content-evenly">
            <div className="d-flex flex-column justify-content-center">
            <p className="gradient-text">Socials</p>
            <div className="d-flex flex-column">
              <span><i className="bi bi-facebook me-1"></i><a href="https://www.facebook.com/raineuplift" target="_blank">Facebook</a></span>
              <span><i className="bi bi-instagram me-1"></i><a href="https://www.instagram.com/raineuplift/" target="_blank">Instagram</a></span>
              <span><i className="bi bi-substack me-1"></i><a href="https://raineuplift.substack.com/" target="_blank">Substack</a></span>
              </div>
              </div>
          </div>
          
          <div className="w-sm-100 text-center">
            <p className="gradient-text">Subscribe To Our Blog</p>
          <iframe src="https://raineuplift.substack.com/embed"   className="w-sm-100"></iframe>
          </div>
      </div>
      <div className="gradient-bg text-center text-white">
          <span>All Rights Reserved © Raine Uplift {new Date().getFullYear()}</span>
      </div>
      <ToastContainer />
      <FloatingWhatsApp phoneNumber="+263772537086" accountName="Raine Uplift" avatar="https://ngratesc.sirv.com/Raine/favicon.png" statusMessage="Typically replies within 10 minutes"/>
    </div>
  )
}

export default App
