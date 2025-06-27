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
        <div className="d-flex flex-row align-items-center justify justify-content-center gap-2 text-center">
          <div>
          <img src="https://ngratesc.sirv.com/BeautyMaxine/logo.png" width={"30px"} className="img-fluid" alt="logo" />

          </div>
          <div>
          <h6 className="mt-2"><small>Beauty By <b className="gradient-text">Maxine</b></small></h6>

          </div>
        </div>
        <div>
          <a href="#" target="_blank"><button className="btn p_btn shadow">Book Now</button></a>
        </div>
      </div>
      <div className={"min-vh-100 d-flex align-items-center text-center justify-content-center"}>
        <div className="overlay">

        </div>
        <video src="https://ngratesc.sirv.com/Raine/6750890-hd_1920_1080_25fps.mp4" autoPlay loop muted />
        <div className={"vid_con d-flex flex-column justify-content-center"}>
          <div>
            {/* <img src="https://ngratesc.sirv.com/BeautyMaxine/logo.png" width={200} className="img-fluid" /> */}
            <h1 className="display-1 text-center">Beauty By<br /> <span className="gradient-text-two">Maxine</span><br /></h1>
            <a href="#" target="_blank"><button className="text-center p_btn btn shadow">Book Now</button></a>
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
            <p>For more than a decade, we&apos;ve stood at the intersection of art and science transforming beauty
               into empowerment and recovery into renewal. What began as a small team of dedicated therapists has grown 
               into Zimbabwe&apos;s leading spa and wellness center, distinguished by 
              our pioneering post-operative care. From the earliest days of learning international best practices 
              to our ongoing collaborations with world-renowned surgeons, every milestone in our journey 
              reflects a single promise: to guide you safely and respectfully toward your best self.

</p>


          </div>
        </div>
        </Fade>
        <Fade>
            <div className="text-center">
                <h1 className="gradient-text display-1">Surgical Planning & Cordination</h1>
                <p>
                  Your transformation begins well before surgery and we're here to walk with you from the very first step. With a decade of trusted experience, we offer full support in organizing your surgical journey, ensuring clarity, comfort, and peace of mind along the way.
                </p>
                
            </div>
          <div className="row d-flex align-items-center">
            <div className="col-sm">
              <Fade cascade={true}>
              <h3 className="gradient-text">We assist with</h3>
              <ul>
                  <li>Personalized consultations to understand your goals and needs</li>
                  <li>Surgeon matchmaking, connecting you with internationally renowned professionals known for exceptional results</li>
                  <li>Surgery scheduling, ensuring optimal timing for your lifestyle and recovery plan</li>
                  <li>Pre-operative preparation, from mental readiness to skin and body priming for the procedure ahead</li>
                </ul>
                <p>
                  We believe a confident decision is an informed one. Our role is to advocate for your safety, streamline your experience, and create a support system where your comfort is always front and center. Whether you're local or traveling for care, we facilitate every element professionally, discreetly, and with unwavering dedication to your well-being.
                </p>
                <button className="text-center p_btn btn shadow">Book Now</button>
                </Fade>
            </div>
            <div className="col-sm">
              <img src="https://ngratesc.sirv.com/BeautyMaxine/2149941525.jpg" className="img-fluid rounded"/>
            </div>
          </div>
        </Fade>
        <div className={"mt-5 "}>
          <div className={"text-center"}>
            <div>
              <h1 className="display-1 gradient-text">Our Services</h1>
              <p>We offer a full spectrum of spa luxuries and advanced post-operative therapies, each designed to celebrate your journey and safeguard your progress
</p>

            </div>
            <div className="row gap-3 mt-3 mb-3">
              <div className="col-sm shadow rounded p-2 mb-2 gradient-bg-card">
                <Fade direction="down" cascade={true}>	
                <img src="https://ngratesc.sirv.com/Raine/12885.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Holistic Body Rituals</p>
                <small> Deep-tissue and relaxation massages, precision facials tailored to your skin’s needs, and professional nail care—all delivered with keen attention to detail and a warm, personal touch.
</small>
                </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/BeautyMaxine/bertj.png" className="img-thumbnail rounded" />

                <p className="fw-bold gradient-text">Specialized Post-Operative Care</p>
                <small>From the first hours after surgery through every stage of recovery, our team provides wound cleaning and dressing, lymphatic drainage to reduce swelling, seroma monitoring and drainage, plus fibrosis and keloid-scar prevention protocols.</small>
              </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/BeautyMaxine/wellness.png" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Wellness Infusions & Rebalancing Drips</p>
                <small>Medical-grade IV therapies that replenish hydration, accelerate tissue repair, and restore your inner equilibrium—so you emerge feeling energized, clear-headed, and ready to embrace your new contours.
</small>
              </Fade>
              </div>
            </div>
            <div className="row gap-3 mt-3 mb-3">
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/2150356700.jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Targeted Procedure Support</p>
                <small>  Customized recovery plans for Brazilian Butt Lift (BBL), liposuction, tummy tuck, and other cosmetic surgeries, developed in consultation with leading surgeons to ensure optimal outcomes.
</small>
                </Fade>
              </div>
              <div className="col-sm shadow rounded p-2 mb-2">
              <Fade direction="down" cascade={true}>	

                <img src="https://ngratesc.sirv.com/Raine/10010%20(1).jpg" className="img-thumbnail rounded" />
                <p className="fw-bold gradient-text">Continuous Guidance & Confidentiality</p>
                <small> We partner with you at every turn tracking your progress, fine-tuning your treatment plan, and safeguarding your privacy. Our modern facility and compassionate professionals offer a discreet, judgment-free space where your comfort and confidence come first.
</small>
                </Fade>
              </div>
             
            </div>
            <a href={`https://wa.me/${phone}?text=Can i get more information about the services you offer`}><button className="btn p_btn mt-1 mb-1">Learn More</button></a>

          </div>
        </div>
        
        <div className=" mt-5 mb-5">
          <Fade cascade={true}>
          <div className="text-center">
            <h1 className="display-1 gradient-text">Our Ethos</h1>
            <p className="gradient-text">Privacy First</p>
            <p> rooted in professionalism and compassion. We understand that true healing happens when expertise meets genuine kindness, so we cultivate an environment of trust and discretion from the moment you walk through our doors. Whether you’re here for a revitalizing facial, a restorative massage, or the specialized care that follows a tummy tuck, liposuction, Brazilian Butt Lift, or scar-revision procedure, your privacy is our first priority and your well-being, our unwavering commitment.</p>
              <a href="mailto:info@beautybymaxine.co.zw?subject=Info on your ethos"><button className="btn p_btn mt-2 mb-3">Learn More</button></a>
            <img src="https://ngratesc.sirv.com/BeautyMaxine/hands-1327811_1920.jpg" className="img-fluid rounded" />
          </div>
          </Fade>
        </div>
        <Fade>
        <div className=" mt-5 mb5 row align-items-center">
          <div className="col-sm text-md-start text-center">
            <h1 className="display-1 gradient-text">Up To Date Methods and Techniques!</h1>
            <p>Modern techniques and time honored therapies unite in our treatment rooms. Lymphatic drainage,
               keloid-inhibiting protocols, seroma management, and medical grade wound care share space with 
               soothing aromatherapy, bespoke facials, and precision manicures. We&apos;ve seen firsthand how an 
               integrated approach where physical restoration and emotional support walk hand in hand can 
               elevate results and deepen confidence.</p>
              <a href={`https://wa.me/${phone}?text=Can i get more information about the Wellness Academy`}><button className="btn p_btn mt-1 mb-1">Learn More</button></a>

          </div>
          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/BeautyMaxine/woman-s-body-with-marker-traces-front-view.jpg" className="img-fluid rounded" alt="wellness academy" />
          </div>
        </div>
        </Fade>
        <Fade>
        <div className=" mt-5 mb5 row align-items-center">
          <div className="col-sm text-md-start text-center">
            <h1 className="display-1 gradient-text">Our Vision</h1>
            <p>to foster a sanctuary where skillful hands and open hearts collaborate on your 
              transformation. Every session is more than a service;
               it&apos;s a partnership built on respect, expertise, and the belief that true beauty
                emerges from health—inside and out.
</p>
              <a href={`https://wa.me/${phone}?text=Can i get more information about the Wellness Warehouse`}><button className="btn p_btn mt- mb-3">Learn More</button></a>
          </div>
          <div className="col-sm order-md-first">
            <img src="https://ngratesc.sirv.com/BeautyMaxine/portrait-beautiful-woman-with-floral-mask-gloves.jpg" className="img-fluid rounded" alt="wellness academy" />
          </div>
        </div>
        </Fade>
        <Fade>
        <div className="mt-5 mb-5 text-center">
            <h1 className="gradient-text display-1">Strategic Partnerships</h1>
            <p>At Beauty By Maxine, we pride ourselves on collaborating with top professionals in the industry to design and implement wellness routines that enhance both the quality and longevity of life. Our trusted network of partners brings unmatched expertise and dedication to holistic health. This esteemed group includes naturopathic doctors, dentists, psychotherapists, nutritionists, personal trainers, and medical doctors. Together, we ensure that every wellness plan is tailored to meet individual needs, empowering our clients to live healthier, more fulfilling lives.</p>
            <a href={`mailto:info@beautybymaxine.co.zw?subject=Partner with Beauty By Maxine`}><button className="btn p_btn mb-3">Partner With Us</button></a>

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
            
        </div>

      </div>
      <div className="container d-flex flex-row flex-wrap justify-content-evenly gap-5 mt-5">
          <div className=" text-md-start text-center mb-3">
            <p className="gradient-text">Get In Touch</p>
            <div className="d-flex flex-column">
              <span><i className="bi bi-telephone me-1"></i>{phone}</span>
              <span><i className="bi bi-envelope me-1"></i><a href="mailto:info@beautybymaxine.co.zw">info@beautybymaxine.co.zw</a></span>
            </div>
          </div>
          <div className="text-md-start text-center mb-3 justify-content-evenly">
            <div className="d-flex flex-column justify-content-center">
            <p className="gradient-text">Socials</p>
            <div className="d-flex flex-column">
              <span><i className="bi bi-facebook me-1"></i><a href="https://www.facebook.com/Beautybymaxineziehl" target="_blank">Facebook</a></span>
              <span><i className="bi bi-instagram me-1"></i><a href="https://www.instagram.com/beauty_bymaxine/" target="_blank">Instagram</a></span>
              <span><i className="bi bi-substack me-1"></i><a href="https://beautybymaxine.substack.com/" target="_blank">Substack</a></span>
              </div>
              </div>
          </div>
          
          <div className="w-sm-100 text-center">
            <p className="gradient-text">Subscribe To Our Blog</p>
          <iframe src="https://aurorasystems.substack.com/embed"   className="w-sm-100"></iframe>
          </div>
      </div>
      <div className="gradient-bg text-center text-white">
          <span>All Rights Reserved © Beauty By Maxine {new Date().getFullYear()}</span>
      </div>
      <ToastContainer />
      <FloatingWhatsApp phoneNumber={phone} accountName="Beauty By Maxine" avatar="https://ngratesc.sirv.com/BeautyMaxine/logo.png" statusMessage="Typically replies within 10 minutes"/>
    </div>
  )
}

export default App
