import Proptypes from "prop-types";
import styles from "./Ddos.module.css";

// import axios from "axios";

import DashboardNavigation from "../../../components/DashboardNavigation/DashboardNavigation";
import AsideMenu from "../../../components/AsideMenu/AsideMenu";
import InputField from "../../../components/InputField/InputField";
import DropDownSelectField from "../../../components/DropDownSelectField/DropDownSelectField";

import { Link } from "react-router-dom";

import { useState } from "react";

const {
  formDiv,
  ddosDiv,
  ddosWrapper,
  backButton,
  ddosServices,
  ddosService,
  addService,
  mainDdos,
  ddosForms,
  submitButton,
} = styles;

const Ddos = ({ attacks }) => {
  const services = ["Service1", "Service2", "Service3"];

  // FORM STATES

  const [targetService, setTargetService] = useState("");
  const [numberOfThreads, setNumberOfThreads] = useState("");
  const [numberOfVMs, setNumberOfVMs] = useState("");
  const [havocMode, setHavocMode] = useState("");
  const [stopTime, setStopTime] = useState("");

  const updateTargetService = (e) => {
    setTargetService(e.target.value);
  };
  const updateNumberOfThreads = (e) => {
    setNumberOfThreads(e.target.value);
  };
  const updateNumberOfVMs = (e) => {
    setNumberOfVMs(e.target.value);
  };
  const updateHavocMode = (e) => {
    setHavocMode(e.target.value);
  };
  const updateStopTime = (e) => {
    setStopTime(e.target.value);
  };

  const mappedServices = services.map((service) => (
    <div key={service} className={ddosService}>
      {service}
    </div>
  ));

  return (
    <div className={ddosDiv}>
      <AsideMenu attacks={attacks} />
      <div className={ddosWrapper}>
        <DashboardNavigation />
        <div className={ddosWrapper}>
          <Link to={"/"}>
            <img
              src="/icons/rightArrow.png"
              className={backButton}
              alt="back"
            />
          </Link>
          <div className={addService}>+ Service</div>
          <div className={mainDdos}>
            <div className={ddosServices}>{mappedServices}</div>
            <form
              className={formDiv}
              encType="multipart/form-data"
              onSubmit={() => alert("ATTACK HO GAYA!!!!!!!")}
            >
              <div className={ddosForms}>
                <DropDownSelectField
                  id="participantCSAMember"
                  value={targetService}
                  valueUpdater={updateTargetService}
                  inputLabel="Choose Target Service"
                  required={true}
                  options={services}
                  defaultOption="select"
                />
                <InputField
                  id="concurrentThreads"
                  type="text"
                  inputLabel="Enter Concurrent Threads"
                  value={numberOfThreads}
                  valueUpdater={updateNumberOfThreads}
                  required={true}
                />
                <InputField
                  id="vmsRequired"
                  type="text"
                  inputLabel="Enter VMs Required"
                  value={numberOfVMs}
                  valueUpdater={updateNumberOfVMs}
                  required={true}
                />
                <DropDownSelectField
                  id="havocMode"
                  value={havocMode}
                  valueUpdater={updateHavocMode}
                  inputLabel="Choose Havoc Mode"
                  required={true}
                  options={["yes", "no"]}
                  defaultOption="select"
                />
                {havocMode === "no" && (
                  <InputField
                    id="stopTime"
                    type="text"
                    inputLabel="Enter Stop Time"
                    value={stopTime}
                    valueUpdater={updateStopTime}
                    required={havocMode === "yes"}
                  />
                )}
                <button type="submit" className={submitButton}>
                  Start Attacking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Ddos.propTypes = {
  attacks: Proptypes.array.isRequired,
};

export default Ddos;
