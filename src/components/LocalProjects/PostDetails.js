import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import projects from "./projects.js";
import { Link } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar";



class PostDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let aosDelay = 50;

        let currentPost = {
            currentBody: this.props.post.image,
            currentStatus: this.props.post.status,
            currentContent: this.props.post.content,
            currentTitle: this.props.post.title,
            currentSpan: this.props.post.span,
            currentDescription: this.props.post.description,
            currentProblem: this.props.post.problem,
            currentPurpose: this.props.post.purpose,
            currentNote: this.props.post.note,
            currentStructure: this.props.post.structure,
            currentInteraction: this.props.post.interaction,
            currentUsage: this.props.post.usage,
            currentComponents: this.props.post.components,
            currentDiscussion: this.props.post.discussion,
            currentAdditional: this.props.post.additional,
            currentFurther: this.props.post.further,
            currentDate_start: this.props.post.date_start,
            currentDate_end: this.props.post.date_end,
            currentIn_process: this.props.post.in_process,
            currentComplete: this.props.post.complete,
            currentPersonal: this.props.post.personal,
            currentRole: this.props.post.role,
            currentSkills: this.props.post.skills,
            currentDeliverable: this.props.post.poc_type,
            currentLink: this.props.post.link

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

        return (
            <div className="fetching-box open" id="fetching-box">
                <ProgressBar className="scrollbar" />
                <a href="./" className="close-button"></a>
                <div className="post-content" id="post-content" data-aos="fade-down">
                    <div className="project-content">
                        <div className="project-content-inner">
                            <h2 className="project-title">{currentPost.currentTitle}
                            </h2>
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
    }
}

export default PostDetail;