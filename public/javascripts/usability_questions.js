// Copyright (c) 2010 Andrew J. Peterson / NDP Software. All Rights Reserved.
function generateUxActivities() {
    function expandCommonQuestions(uxActivities) {

        // Common questions get a "key", and are filled in...
        // This is just to make the data structure lighter, and is optional.
        var common_questions = {
            terminology: 'Is our terminology correct?',
            understand_domain: 'Do we understand the domain?',
            understand_goals: "What are the user's goals?",
            understand_workflow: 'What process & steps are used to achieve goals?',
            understand_domain_problem: 'What problems should the product solve?',
            understand_roles: 'Who actually does tasks? and who helps?',
            understand_user_types: 'What are the major types of users?',
            understand_attitudes: 'What are the users\' attitudes, beliefs, desires, and experiences?',
            understand_product_weaknesses: 'What product areas need the most attention?',
            // What personal, social and cultural characteristics do users bring to the tasks?
            understand_environment: 'How are users influenced by their physical environment?',
            understand_time_frame: "What is the users' time frame?",
            varying_perspectives: 'What varying perspectives affect product usage?',
            understand_varying_goals: 'What varying goals affect product usage?',
            test_approach: 'Will users understand our approach/ideas/approach?',
            right_ia: 'What should the categories, I.A. or structure be?',
            right_task_ui: 'Can users complete a task within our product?',
            right_ui: 'Do users understand how to use it?',
            right_ui_timed: 'Can users accomplish X in time Y?',
            right_usability: 'What are the usability problems?',  //What areas have the worst usability problems?
            right_info: 'What information are users looking for?',
            define_cost: 'How much should it cost?',
            understand_product_suggestions: 'What are the users\' opinions of your site and suggestions?',
            understand_product_frustrations: 'What frustrations have users had with your site?',
//    questions: 'xxx',
//    questions: 'xxx',
            satisfied: 'How satisfied are users with your site?'
        };


        for (var i = 0; i < uxActivities.length; i++) {
            var activity = uxActivities[i];
            if (activity.egs) {
                for (var e = 0; e < activity.egs.length; e++) {
                    var q = activity.egs[e];
                    activity.egs[e] = common_questions[q] || q;
                }
            }
        }
    }


// Various UX activities and what questions they answer.
    var uxActivities =
            [
                {
                    name: 'eye tracking',
                    phase: 'design,test',
                    egs: ['What links and pages aren\'t used or seen?'],
                    effort: 2
                },
                {
                    name: 'prototyping',
                    description: 'Paper and higher-fidelity interactive prototypes (PowerPoint, PDFs, HTML, Hypercard, etc.) allow you to start gathering feedback before full features are built.',
                    phase: 'design,test',
                    egs: [
                        'understand_workflow',
                        "terminology",
                        'test_approach',
                        'understand_domain_problem'
                    ],
                    ref: 'http://www.usability.gov/methods/design_site/prototyping.html',
                    effort: 2
                },
                {
                    name: 'developing personas',
                    phase: 'requirements',
                    description:  'Developing personas (and necessary research, analysis and synthesis) provide insight into users\s mindsets.',
                    egs: [
                        'understand_attitudes',
                        'understand_user_types',
                        'varying_perspectives',
                        'understand_varying_goals',
                        "understand_time_frame",
                        ''],
                    ref: 'http://www.usability.gov/methods/analyze_current/personas.html',
                    effort: 3
                },
                {
                    name: 'contextual interviews',
                    phase: 'requirements',
                    description:  'Contextual interviews help discover problems, domain knowledge, goals, tasks.',
                    egs: [
                        'understand_environment',
                        'varying_perspectives',
                        'understand_varying_goals',
                        "terminology",
                        "understand_domain_problem",
                        //"What is a reasonable time frame?",
                        'understand_roles',
                        "understand_time_frame",
                        "understand_workflow"
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/contextual.html',
                    effort: 2
                },
                {name: 'SME interviews',
                    phase: 'requirements',
                    description:  'Subject matter expert interviews can provide insight into the complexities of domain, specialized knowledge, best practices.',
                    egs: [
                        "terminology",
                        "understand_domain_problem",
                        "understand_time_frame",
                        "understand_workflow"
                    ],
                    effort: 2},
                {name: 'customer interviews',
                    phase: 'requirements',
                    description:  'Customer interviews test goals, frustrations, buying considerations.',
                    egs: [
                        'varying_perspectives',
                        'understand_environment',
                        'understand_varying_goals',
//                    "define_cost",
                        "understand_domain_problem",
                        "understand_time_frame",
                        "understand_workflow"
                    ],
                    effort: 2,
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/individual.html'
                },
                {name: 'quantitative research',
                    description:  'Quantitative research can answer financial questions, market demographics.',
                    phase: 'requirements',
                    egs: [
//                    'define_cost',
                        'terminology',
                        'right_ia',
                        'understand_varying_goals'
//                    'Are there really potential users?'
                    ],
                    effort: 2
                },
                {
                    name: 'click tracking',
                    description: 'Click tracking provides information about where people are interacting with your pages.',
                    phase: 'test',
                    egs: [
                        'What links and pages aren\'t used or seen?',
                        'What do users actually do/find on our site?'
                    ],
                    effort: 1,
                    ref: 'http://www.crazyegg.com/'
                },
                {
                    name: 'web analytics',
                    description: 'With enough traffic, web analytics can provide real, factual data, but can require effort to decipher.',
                    phase: 'test',
                    egs: [
                        'What links and pages aren\'t used?',
                        'What do users actually do/find on our site?',
                        'Can different variants increase click-through (A v. B)?'
                    ],
                    effort: 1,
                    ref: 'http://www.google.com/analytics/'
                },
                {name: 'focus groups',
                    description:  'Focus groups are great for understanding the sense of brand or new domain.',
                    phase: 'requirements,design',
                    egs: [
                        'varying_perspectives',
                        'understand_varying_goals',
                        'Do users understand the brand?',
                        'understand_domain',
                        'understand_attitudes',
                        'test_approach',
                        "understand_time_frame"
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/focus.html',
                    effort: 3
                },
                {
                    name: 'card sorting',
                    phase: 'requirements,design',
                    egs:[
                        'right_ia',
                        "terminology",
                        "understand_workflow"
                    ],
                    ref: 'http://www.usability.gov/methods/design_site/cardsort.html',
                    effort: 2
                },
                {
                    name: 'task analysis',
                    phase: 'requirements',
                    egs: [
                        'understand_goals',
                        'understand_attitudes',
                        'understand_environment',
                        'understand_workflow'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/analysis.html',
                    effort: 2
                },
                {
                    name: 'usability testing',
                    phase: 'design,test',
                    description:  "Usability testing is excellent for a variety of learnings: assessing prototype's first-time ease of use, fine tuning button labels and such, persuading people there IS a problem.",
                    egs: [
                        'right_usability',
                        'right_ui',
                        'right_task_ui',
                        'right_ui_timed',
                        'understand_attitudes',
                        'understand_environment',
                        'understand_workflow',
                        'How easy is it to learn?',
                        'Is the usability that bad?',
                        "terminology",
                        'What is the error rate?',
                        'Can users can make the right choice and explain why?'
                    ],
                    ref: 'http://www.usability.gov/methods/test_refine/learnusa/index.html',
                    effort: 2
                },
                {
                    name: 'remote user testing',
                    description: 'Remote un-moderated user testing offers a quick turn-around tool. Good for task-oriented tasks for a wide audience.',
                    phase: 'design,test',
                    egs: [
                        'right_usability',
                        'right_ui',
                        'Is the usability that bad?',
                        "terminology",
                        'right_ui_timed',
                        "right_task_ui"
                    ],
                    ref: 'http://usertesting.com',
                    effort: 1
                },
                {
                    name: 'heuristic evaluations',
                    phase: 'design,test',
                    eg: [
                        'right_usability',
                        'understand_product_weaknesses'
                    ],
                    ref: 'http://www.usability.gov/methods/test_refine/heuristic.html',
                    effort: 2
                },
                {
                    name: 'individual user interviews',
                    phase: 'requirements,design',
                    eg: [
                        'understand_attitudes',
                        'right_ia',
                        "terminology",
                        "understand_time_frame",
                        "understand_workflow"
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/individual.html',
                    effort: 2
                },
                {
                    name: 'online surveys',
                    description:'Online surveys are relatively easy to set up and provide small, bite-sized answers.',
                    phase: 'test',
                    egs: [
                        'What are the demographics of the actual users?',
                        'understand_product_suggestions',
                        'right_info',
                        'satisfied',
                        'understand_product_frustrations',
                        "understand_time_frame"
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/surveys.html',
                    effort: 2
                },
                {
                    name: 'support team',
                    description: 'Formal and informal conversations with your support team can provide insight into the current user\'s experiences.',
                    phase: 'test',
                    egs: [
                        'understand_product_suggestions',
                        'right_info',
                        'satisfied',
                        'understand_product_frustrations',
                        'understand_product_weaknesses',
                        'right_ui'
                    ],
                    ref: '',
                    effort: 1
                },
                {
                    name: 'support forums',
                    description:'Online support forums-- both yours and your competitors-- can provide insight into your current users\'s experiences.',
                    phase: 'requirements,design,test',
                    egs: [
                        'understand_product_suggestions',
                        'right_info',
                        'satisfied',
                        'understand_product_frustrations'
                    ],
                    ref: 'http://getsatisfaction.com',
                    effort: 1
                }
//            {name: 'user diaries',
//              description:  'behavior over time',
//              egs: [
////                'How do people behave over time?'
//              ],
//              effort: 3},
//            {name: 'ethnographic interviews',
//              description:  'extract values and goals that motivate actions',
//              egs: [
//              ],
//              effort: 3
//            }
    ];

    expandCommonQuestions(uxActivities);

    return uxActivities;
}


function generateUXQuestions() {

    // Extract questions hash of question => [activity[0], activity[1]...]
    function extractQuestions(uxActivities) {
        var questions = {};
        for (var i = 0; i < uxActivities.length; i++) {
            var activity = uxActivities[i];
            if (activity.egs) {
                for (var e = 0; e < activity.egs.length; e++) {
                    var q = activity.egs[e];
                    if (q.length > 0) {
                        if (!questions[q]) {
                            questions[q] = [];
                        }
                        questions[q].push(activity);
                    }
                }
            }
        }
        return questions;
    }


    var uxActivities = generateUxActivities();

    var uxQuestions = extractQuestions(uxActivities)

    return uxQuestions;
}

