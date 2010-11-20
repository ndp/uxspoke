// Copyright (c) 2010 Andrew J. Peterson / NDP Software. All Rights Reserved.
function generateUxActivities() {

    /*
     learning more about your users
     hat are your users like? are they social? tech savvy? onilne shoppers?
     how are they currently solving whatever problem your product solves?
     what do they love/hate about the current solution?



     Learning more about your product:
     what parts are confusing or frustrating?
     Which parts make people happy?
     what parts are missing?
     what are the major problems that are driving people away?

     Would you buy the product?
     How much would they pay?
     Predicting future bheavior.
     Which features should we build next?
     Exactly how should the feature work?

     */
    function expandCommonQuestions(uxActivities) {

        // Common questions get a "key", and are filled in...
        // This is just to make the data structure lighter, and is optional.
        var common_questions = {
            // Domain & Problem
            terminology: 'Is our terminology correct?',
            understand_domain: 'Do we understand the domain?',
            understand_domain_problem: 'What problems should the product solve?',
            understand_market: 'What\'s the size of our market?',
            define_cost: 'Would the buy it? at what price?',
            understand_demographics: 'What are the demographics of the actual users?',

            // User's role in domain and problem
            understand_goals: "What are the user's goals?",
            understand_workflow: 'What process & steps are used to achieve goals?',
            understand_roles: 'Who actually does what tasks? and who helps?',
            understand_brand: 'Do users understand the promise of the brand?',
            understand_environment: 'How are users influenced by their physical environment?',
            understand_time_frame: "What is the users' time frame?",
            understand_attitudes: 'What are the users\' attitudes, beliefs, desires, and experiences?',
            understand_varying_perspectives: 'What varying perspectives affect product usage?',
            understand_user_types: 'What are the major types of users?',

            // Product definition
            test_approach: 'Will users understand our approach and concept?',
            right_ia: 'What should the categories, I.A. or structure be?',
            right_task_ui: 'Can users complete a task within our product?',
            right_ui: 'Do users understand how to use it?',
            define_feature: 'Exactly how should this feature work? and look?',
            define_priority: 'What feature should we build next?',


            // Product feedback

            right_page_design: 'Can different variants increase click-through (A v. B)?',
            // What personal, social and cultural characteristics do users bring to the tasks?
            right_visual_design: 'Do people find the button?',
            right_ui_timed: 'Can users accomplish X in time Y?',
            right_info: 'What information are users looking for?',
            understand_learnability: 'How easy is it to learn?',
            understand_usage: 'What do users do on our site? Never do?',//What are the usability problems?
            understand_product_weaknesses: 'What areas need the most attention? Is it that bad?',
            understand_product_suggestions: 'What are the users\' opinions of your site and suggestions?',
            understand_product_frustrations: 'What frustrations have users had with your site?'
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
                    name: 'asking an expert',
                    description: 'Many questions are not answered particularly well by users directly. Look for other experts in research, pricing, product strategy and UI design.',
                    phase: 'requirements,design,test',
                    egs: ['define_cost','understand_market','define_priority','define_feature','understand_demographics']
                },
                {
                    name: 'eye tracking',
                    description: 'Eye tracking monitors users eye movements as the look at a web page (or anything, really). It used to be quite expensive, but new comapanies are offering very inexpensive solutions.',
                    phase: 'design,test',
                    egs: ['right_visual_design'],
                    effort: 2
                },
                {
                    name: 'prototyping',
                    description: 'Build a simpler version of your product and put it in front of your potential users to get feedback before it\'s built. Use paper or an interactive medium (PowerPoint, PDFs, HTML, Hypercard, etc.)-- whatver\'s fastest.',
                    phase: 'design',
                    egs: [
                        'understand_workflow',
                        "terminology",
                        'understand_domain_problem',
                        'define_feature'
                    ],
                    ref: 'http://www.usability.gov/methods/design_site/prototyping.html',
                    effort: 2
                },
                {
                    name: 'developing personas',
                    phase: 'requirements',
                    description:  'Developing personas (and necessary research, analysis and synthesis) provide insight into users\' mindsets.',
                    egs: [
                        'understand_attitudes',
                        'understand_user_types',
                        'understand_varying_perspectives',
                        'understand_roles',
                        "understand_time_frame",
                        ''],
                    ref: 'http://www.usability.gov/methods/analyze_current/personas.html',
                    effort: 3
                },
                {
                    name: 'contextual interviews',
                    phase: 'requirements',
                    description:  'Contextual interviews mean visiting potential users where they are currently solving their problem-- in the office or at home. ' +
                            'They help discover problems, domain knowledge, goals, and tasks.',
                    egs: [
                        'understand_environment',
                        'understand_varying_perspectives',
                        'understand_roles',
                        'understand_user_types',
                        "terminology",
                        "understand_domain_problem",
                        'understand_roles',
                        "understand_time_frame",
                        "understand_workflow",
                            'understand_goals'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/contextual.html',
                    effort: 2
                },
                {name: 'SME interviews',
                    phase: 'requirements',
                    description:  'Subject matter expert interviews can provide insight into the complexities of domain, specialized knowledge, best practices.',
                    egs: [
                        "terminology",
                        'understand_user_types',
                        "understand_domain_problem",
                        "understand_time_frame",
                        "understand_workflow",
                        'understand_market',
                            'understand_goals'
                    ],
                    effort: 2},
                {name: 'customer interviews',
                    phase: 'requirements,design,test',
                    description:  'Customer interviews test goals, frustrations, buying considerations.',
                    egs: [
                        'understand_varying_perspectives',
                        'understand_user_types',
                        'understand_environment',
                        'understand_roles',
                        "understand_domain_problem",
                        "understand_time_frame",
                        "understand_workflow",
                            'understand_goals'
                    ],
                    effort: 2,
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/individual.html'
                },
                {
                    name: 'potential users interviews',
                    phase: 'requirements',
                    description: 'Individual interviews can give you a deep understanding of the people who come to your site.',
                    eg: [
                        'understand_attitudes',
                        'understand_environment',
                        'understand_user_types',
                        'understand_roles',
                        "understand_domain_problem",
                        'right_ia',
                        "terminology",
                        "understand_time_frame",
                        "understand_workflow",
                            'understand_goals'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/individual.html',
                    effort: 2
                },
                {
                    name: 'quantitative research',
                    description:  'Quantitative research can answer financial questions, market demographics, technical requirements.',
                    phase: 'requirements',
                    egs: [
                        'define_cost',
                        'understand_market',
                        'understand_demographics'
                    ],
                    effort: 2
                },
                {
                    name: 'click tracking',
                    description: 'Click records where people click on your web pages. It provides insights into how people actually use your product.',
                    phase: 'test',
                    egs: [
                        'right_visual_design',
                        'understand_usage'
                    ],
                    effort: 1,
                    ref: 'http://www.crazyegg.com/'
                },
                {
                    name: 'web analytics',
                    description: 'Web analytics-- with enough traffic-- can provide real, factual data, but can require effort to decipher.',
                    phase: 'test',
                    egs: [
                        'understand_usage',
                        'right_visual_design',
                        'right_page_design',
                        'understand_product_frustrations',
                        'understand_product_weaknesses'
                    ],
                    effort: 1,
                    ref: 'http://www.google.com/analytics/'
                },
                {name: 'focus groups',
                    description:  'Focus groups are small group discussions involving 6 to 12 people and moderated by a trained facilitator. Usually everyone is in the same location. This technique is not usually good for actual behaviors but is a self-report technique. The discussion can be influenced by group dynamics.',
                    phase: 'requirements',
                    egs: [
                        'understand_varying_perspectives',
                        'understand_roles',
                        'understand_brand',
                        'understand_domain',
                        'understand_user_types',
                        'understand_attitudes',
                        'test_approach',
                        "understand_time_frame",
                            'understand_goals'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/focus.html',
                    effort: 3
                },
                {
                    name: 'card sorting',
                    description: 'Card sorting is an activity where the user\'s interactively break down their problem and domain, allowing product designers to understand their mindset.',
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
                    description: 'Task analysis dives into how users actually get the job done.',
                    phase: 'requirements',
                    egs: [
                        'understand_goals',
                        'understand_attitudes',
                        'understand_workflow'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/analysis.html',
                    effort: 2
                },
                {
                    name: 'competitor usability testing',
                    description: 'Usability testing with a twist-- see how the competitors are doing by user testing their product.',
                    phase: 'requirements, design',
                    eg: ['terminology', 'understand_domain', 'understand_goals', 'understand_workflow','understand_domain','understand_roles','right_ia']
                },
                {
                    name: 'usability testing',
                    phase: 'design,test',
                    description:  "Usability testing is excellent for a variety of learnings: assessing prototype's first-time ease of use, fine tuning button labels and such, persuading people there IS a problem.",
                    egs: [
                        'understand_product_weaknesses',
                        'right_ui',
                        'right_task_ui',
                        'right_ui_timed',
                        'understand_brand',
                        'understand_attitudes',
                        'understand_workflow',
                        "terminology",
                        'right_visual_design',
                        'understand_learnability',
                        'Can users can make the right choice and explain why?'
                    ],
                    ref: 'http://www.usability.gov/methods/test_refine/learnusa/index.html',
                    effort: 2
                },
                {
                    name: 'remote user testing',
                    description: 'Remote un-moderated user testing offers a quick turn-around to questions of smaller scope. Good for task-oriented tasks not requiring in-depth domain knowledge.',
                    phase: 'design,test',
                    egs: [
                        'understand_product_weaknesses',
                        'right_ui',
                        "terminology",
                        'right_ui_timed',
                        'right_visual_design',
                        'understand_learnability',
                        "right_task_ui"
                    ],
                    ref: 'http://usertesting.com',
                    effort: 1
                },
                {
                    name: 'heuristic evaluations',
                    description: 'User experience professionals evaluate your product in terms of "best practices" and provide feedback.',
                    phase: 'design,test',
                    eg: [
                        'understand_product_weaknesses'
                    ],
                    ref: 'http://www.usability.gov/methods/test_refine/heuristic.html',
                    effort: 2
                },
                {
                    name: 'online surveys',
                    description:'Online surveys are relatively easy to set up and provide small, bite-sized answers within (or without) the context of your design.',
                    phase: 'test',
                    egs: [
                        'understand_demographics',
                        'right_info',
                        'understand_brand',
                        'understand_product_weaknesses',
                        'understand_product_frustrations',
                        'understand_product_suggestions',
                        'understand_learnability',
                        "understand_time_frame",
                            'understand_goals'
                    ],
                    ref: 'http://www.usability.gov/methods/analyze_current/learn/surveys.html',
                    effort: 2
                },
                {
                    name: 'support team',
                    description: 'Formal and informal conversations with your support and sales team can provide insight into the current users\' experiences.',
                    phase: 'test',
                    egs: [
                        'right_info',
                        'understand_product_weaknesses',
                        'understand_product_frustrations',
                        'understand_product_suggestions',
                        'understand_learnability',
                        'right_ui'
                    ],
                    ref: '',
                    effort: 1
                },
                {
                    name: 'support forums',
                    description:'Online support forums-- both yours and your competitors-- can provide insight into your current users\' experiences.',
                    phase: 'requirements,design,test',
                    egs: [
                        'right_info',
                        'understand_product_weaknesses',
                        'understand_product_frustrations',
                        'understand_product_suggestions',
                        'understand_learnability'
                    ],
                    ref: 'http://getsatisfaction.com',
                    effort: 1
                },
                {
                    name: 'user diaries',
                    phase: 'requirements',
                    description:  'By having users and potential users "journal", you can collect information about behavior over a longer period.',
                    egs: ['terminology','understand_goals','understand_workflow','understand_domain_problem','understand_roles','understand_attitudes'],
                    effort: 3
                }


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

