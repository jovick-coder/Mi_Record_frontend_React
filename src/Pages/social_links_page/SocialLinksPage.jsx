import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { FaEdit, FaLink, FaSave, FaTimesCircle, FaTrash } from "react-icons/fa";
import { SocialLinksContext } from "../../context/SocialLinksContext";
import "./SocialLinksPage.css";

export default function SocialLinksPage() {
  const { socialLinks, setSocialLinks } = useContext(SocialLinksContext);
  const [addNewLink, setAddNewLink] = useState(false);
  // console.log(socialLinks);
  return (
    <>
      {" "}
      <div className="row my-4">
        <div className="col-md-12 ">
          <div className="ms-2">
            <span className="d-none d-sm-inline">Victor Josiah</span>
            <h1 className="head-text">Social Links</h1>
          </div>
          {/* <div>
            <button className="fancy-btn long-text">
              {/* <FaStopwatch20 /> * /}
              Event Countdown
            </button>
          </div> */}
        </div>
      </div>
      <div className="main-card full-main-card">
        {socialLinks.map((social) => {
          return (
            <LinkDiv
              social={social}
              socialLinks={socialLinks}
              setSocialLinks={setSocialLinks}
            />
          );
        })}

        {addNewLink ? (
          <AddSocialLinkForm setAddNewLink={setAddNewLink} />
        ) : (
          <button
            className="fancy-btn"
            onClick={() => setAddNewLink(!addNewLink)}
          >
            Add Link
          </button>
        )}
      </div>
    </>
  );
}

export const LinkDiv = ({ social, socialLinks, setSocialLinks }) => {
  const [editLink, setEditLink] = useState(null);
  const { linkId, name, icon, link } = social;

  // check if a project if found with the given id
  function checkProjectIdFunction(id) {
    const found = socialLinks.some((el) => el.linkId === id);
    return found;
  }
  // return the found project
  function editLinkObjectFunction(id) {
    if (checkProjectIdFunction(id) !== true) return null;
    const linkObject = socialLinks.find((x) => x.linkId === id);
    return linkObject;
  }
  function getSelectedLinkIndex(id) {
    // Get index of object with specific value in array
    const index = socialLinks.findIndex((item) => item.linkId === id);
    return index;
  }
  function updateLinkName(e) {
    const index = getSelectedLinkIndex(editLink.linkId);
    let linkObjectCopy = [...socialLinks];
    linkObjectCopy[index].name = e.target.value;

    setSocialLinks(linkObjectCopy);
  }
  function updateLink(e) {
    const index = getSelectedLinkIndex(editLink.linkId);
    let linkObjectCopy = [...socialLinks];
    linkObjectCopy[index].link = e.target.value;

    setSocialLinks(linkObjectCopy);
  }

  function deleteLinkFunction(id) {
    const linkIndex = getSelectedLinkIndex(id);
    // confirm action
    if (window.confirm("Social link will deleted !!!") === false) return;
    //Remove specific value by index
    let linkObjectCopy = [...socialLinks];
    linkObjectCopy.splice(linkIndex, 1);
    setSocialLinks(linkObjectCopy);
  }
  return (
    <>
      {" "}
      <div className="link-div" key={linkId}>
        {editLink === null ? (
          <>
            {" "}
            <div className="text-div">
              <div className="my-auto d-flex">
                <div className="icon">{icon}</div>
                <div className="name">{name}</div>
              </div>
              <div className="link">{link}</div>
            </div>
            <div className="icons-div">
              <div
                className="edit"
                onClick={() => setEditLink(editLinkObjectFunction(linkId))}
              >
                <FaEdit />
              </div>
              <div
                className="delete"
                onClick={() => deleteLinkFunction(linkId)}
              >
                <FaTrash />
              </div>
            </div>
          </>
        ) : (
          // </div>
          // <div className="link-div">
          <>
            {" "}
            <div className="text-div edit-form">
              <div className="group">
                <div className="icon">
                  {icon}
                  {/* <feature>Make a drop down of icons so one can select log for the social link <feature> */}
                  {/* <select className="form-select h-100">
                    <option value="icon">{icon}</option>
                  </select> */}
                </div>
                <div className="name">
                  <input
                    value={name}
                    className="form-control w-100"
                    onChange={(e) => {
                      updateLinkName(e);
                    }}
                  />
                </div>
              </div>
              <div className="link">
                <input
                  value={link}
                  className="form-control w-100"
                  onChange={(e) => updateLink(e)}
                />
              </div>
            </div>
            <div className="icons-div">
              <div className="m-auto" onClick={() => setEditLink(null)}>
                <FaTimesCircle />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const AddSocialLinkForm = ({ setAddNewLink }) => {
  const { socialLinks, setSocialLinks } = useContext(SocialLinksContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  function saveNewLink() {
    if (name === "") return console.log("name is empty");
    if (link === "") return console.log("link is empty");

    const newLinkObject = {
      linkId: nanoid(),
      name: name,
      icon: <FaLink />,
      link: link,
    };

    setSocialLinks([...socialLinks, newLinkObject]);
    setAddNewLink(false);
  }
  return (
    <>
      <div className="link-div">
        <div className="text-div edit-form">
          <div className="group">
            <div className="icon">
              <FaLink />
              {/* <feature>Make a drop down of icons so one can select log for the social link <feature> */}
              {/* <select className="form-select h-100">
                    <option value="icon">{icon}</option>
                  </select> */}
            </div>
            <div className="name">
              <input
                value={name}
                className="form-control w-100"
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
            </div>
          </div>
          <div className="link">
            <input
              value={link}
              className="form-control w-100"
              onChange={(e) => setLink(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="icons-div">
          <div className="edit" onClick={() => saveNewLink()}>
            <FaSave />
          </div>
          <div className="delete" onClick={() => setAddNewLink(false)}>
            <FaTimesCircle />
          </div>
        </div>
        {/* <div className="icons-div">
          <div className="m-auto" onClick={() => setAddNewLink(false)}>
            <FaSave />
          </div>
          <div className="m-auto" onClick={() => setAddNewLink(false)}>
            <FaTimesCircle />
          </div>
        </div> */}
      </div>
    </>
  );
};
