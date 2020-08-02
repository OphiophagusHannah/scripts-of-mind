// import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import projects from "./projects.js";
import { Link } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar";

import React, { Component } from 'react';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';


function RenderDish({ project }) {


    let aosDelay = 50;

    let currentPost = {
        currentBody: project.image,
        currentStatus: project.status,
        currentContent: project.content,
        currentTitle: project.title,
        currentSpan: project.span,
        currentDescription: project.description,
        currentProblem: project.problem,
        currentPurpose: project.purpose,
        currentNote: project.note,
        currentStructure: project.structure,
        currentInteraction: project.interaction,
        currentUsage: project.usage,
        currentComponents: project.components,
        currentDiscussion: project.discussion,
        currentAdditional: project.additional,
        currentFurther: project.further,
        currentDate_start: project.date_start,
        currentDate_end: project.date_end,
        currentIn_process: project.in_process,
        currentComplete: project.complete,
        currentPersonal: project.personal,
        currentRole: project.role,
        currentSkills: project.skills,
        currentDeliverable: project.poc_type,
        currentLink: project.link

    };

    let { width, height } = currentPost;
    let out = {};
    for (let key in currentPost) {
        if (!currentPost.hasOwnProperty(key)) {
            continue;
        }

        let render_key = key.replace("current", "__");
        let lowkey = render_key.toLocaleLowerCase();

        if (currentPost[key]) {
            out[key] = (
                <div className={lowkey}>
                    <h3 className="bold">{lowkey}</h3>
                    <div className="p">{ReactHtmlParser(currentPost[key])}</div>
                </div>
            );
        }
    }
    if (project != null)
        return (
            <div className="fetching-box open" id="fetching-box">
                <ProgressBar className="scrollbar" />
                //TODO: ProgressBar
                <div className="post-content" id="post-content" data-aos="fade-down">
                    <a href="./" className="close-button"></a>
                    <div className="project-content">
                        <div className="project-content-inner">
                            <h2 className="project-title">{currentPost.currentTitle}
                            </h2>
                            //TODO: formatting of each block
                            <div className="span">{currentPost.currentSpan}</div>
                            {out.currentProblem}
                            {out.currentPurpose}
                            {out.currentNote}
                            {out.currentStructure}
                            {out.currentInteraction}
                            {out.currentUsage}
                            {out.currentDiscussion}
                            {out.currentAdditional}
                            {out.currentFurther}
                            {out.currentDate_start}
                            {out.currentDate_end}
                            {out.currentIn_process}
                            {out.currentComplete}
                            {out.currentPersonal}
                            {out.currentRole}
                            {out.currentSkills}
                            {out.currentDeliverable}
                            {out.currentLink}
                        </div>

                    </div>
                </div>
            </div>
        );

    else
        return (
            <div></div >
        );
}

const ProjectDetail = (props) => {

    console.log('component render invoked');
    if (props.project != null) {
        return (
            <div className="container" data-aos="fade-down">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish project={props.project} />
                    </div>

                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }

}

export default ProjectDetail;