// services/terms.service.js

const termsService = {
    getTermsData: () => {
        return {
            title: 'UPAP Terms and Conditions - Compassionate Capitalism',
            page: 'terms'
        };
    },

    getHeader: () => {
        return {
            title: 'UNIVERSAL POVERTY ALLEVIATION PROGRAMME',
            subtitle: 'Terms and Conditions'
        };
    },

    getEffectiveNotice: () => {
        return {
            message: 'These Terms and Conditions are effective as of the date of your digital acceptance or signature confirming your beneficiary status.'
        };
    },

    getClause1: () => {
        return {
            number: 1,
            title: 'Beneficiary Status',
            paragraphs: [
                'We are delighted to inform you that you are now a beneficiary of the Compassionate Capitalism Economic System through the Universal Poverty Alleviation Programme. The Compassionate Capitalism Economic System focuses on 28 basic human needs sectors and is dedicated to reducing the development disparity between underdeveloped nations and developed countries such as the United Kingdom.',
                'Through our innovative and empathetic approach, we are confident that our collective profits will exceed $15 billion per year in the near future, guaranteeing lifelong benefits for you as a beneficiary.'
            ],
            highlightBox: {
                icon: 'fa fa-gift',
                text: 'Congratulations on your beneficiary status!'
            }
        };
    },

    getClause2: () => {
        return {
            number: 2,
            title: 'Business of the Company',
            subsections: [
                {
                    number: '2.1',
                    text: 'The business and affairs of the Company shall always be conducted in accordance with the objectives outlined in the Memorandum and Articles and this Agreement.'
                },
                {
                    number: '2.2',
                    text: 'Each beneficiary shall pursue all reasonable endeavours to ensure that the business of the Company is carried out in accordance with the objectives outlined in the Memorandum and Articles.'
                },
                {
                    number: '2.3',
                    text: 'A beneficiary subject to these terms is a person who has purchased a product from Redirect Mall, received the investment points, and converted the investment points into UPAP slots.'
                }
            ],
            variants: [
                {
                    name: 'Organic-UPAP',
                    type: 'organic',
                    icon: 'fa fa-diamond',
                    description: 'High-level variant offering:',
                    benefits: [
                        'Fixed return of $100 per month',
                        'Option to cash out $30,000 per slot'
                    ]
                },
                {
                    name: 'Family Monthly Income Plan (FMIP)',
                    type: 'fmip',
                    icon: 'fa fa-home',
                    description: 'Low-level variant offering:',
                    benefits: [
                        'Fixed return of $6 per month',
                        'Option to cash out $1,000 per slot'
                    ]
                }
            ],
            additionalSubsections: [
                {
                    number: '2.4',
                    text: 'If you do not complete payment for the items on Redirect Mall or did not convert the received Investment Points into UPAP slots, then you are not yet a beneficiary.'
                },
                {
                    number: '2.5',
                    text: 'Your beneficiary status was granted as a compassionate act since you paid for and have received a product. Therefore, your benefits from the UPAP slots cannot exceed $100 per slot per month for the Organic UPAP slot and $6 per month for Family Monthly Income Plan slot, regardless of the profit of the Compassionate Capitalism Economic System.'
                },
                {
                    number: '2.6',
                    text: 'You will receive access to our compassionate capitalism economic system online platform, enabling you to learn about, receive updates on our activities, and find ways to contribute further to our overall success. You will also receive the promised returns, monitor them and withdraw them using the same platform.'
                },
                {
                    number: '2.7',
                    text: 'Every beneficiary and UPAP slot holder must commit to continue purchasing items from RedirectMall.com periodically as a way of showing continued support to the organization.'
                }
            ]
        };
    },

    getClause3: () => {
        return {
            number: 3,
            title: 'Pre-emption and Transfer of UPAP Slot(s)',
            subsections: [
                {
                    number: '3.1',
                    title: 'General Provision on UPAP Slot(s)',
                    text: 'A beneficiary may not transfer, give, convey, sell, pledge, bequeath, donate, assign, encumber, or otherwise dispose of any UPAP slot except in accordance with this Agreement. Only upon the demise of such person shall the benefit be transferred to the next of kin.'
                },
                {
                    number: '3.2',
                    title: 'Sale or Redemption Upon Termination, Disability, or Death',
                    subsections: [
                        {
                            number: '3.2.1',
                            text: 'Upon the disability, death, or dissolution of a beneficiary (the "triggering event"), the next of kin shall assume the position of the beneficiary within thirty (30) days after the beneficiary\'s demise.'
                        },
                        {
                            number: '3.2.2',
                            text: 'For the purposes of this Agreement, "Disability" means the inability due to a physical or mental condition of such person to maintain their relationship with the Company, including without limitation fulfilling a beneficiary\'s duties in any position as an officer, director, consultant, joint venture, independent contractor, or promoter of the Company, or to conduct normal daily activities on behalf of the Company for any twelve (12) consecutive month period.'
                        }
                    ]
                },
                {
                    number: '3.3',
                    title: 'Terms and Conditions Binding on All Persons Interested in UPAP Slot(s)',
                    text: 'No issuance or transfer of the UPAP Slot(s) shall be effective, and the Company shall not enter any issue or transfer upon the stock books of the Company or issue a certificate in the name of any person unless the Company is satisfied that such person is and has acknowledged in a manner satisfactory to the Company being bound by this Agreement.'
                }
            ]
        };
    },

    getClause4: () => {
        return {
            number: 4,
            title: 'Earnings & Distributions',
            subsections: [
                {
                    number: '4.1 - 4.2',
                    text: 'Subject to the terms of this Agreement, the Board shall declare and pay benefits taking into account: (a) Current profitability and future capital requirements.'
                },
                {
                    number: '4.3',
                    text: 'Without prejudice to the foregoing, the Board shall consider the need to retain amounts which, having regard to all other sources of funding available to the Company, should be retained to meet foreseeable commitments and contingencies and to develop the business of the Company in accordance with the then current business plan and the terms of this Agreement.'
                },
                {
                    number: '4.4',
                    text: 'The Company may decide to pay a beneficiary $5,000 per slot in bulk if the Company decides to terminate the beneficiary status for no fault of the beneficiary.'
                }
            ]
        };
    },

    getClause5: () => {
        return {
            number: 5,
            title: 'Decision-Making Controls',
            text: 'All planning and decisions regarding UPAP Slots shall be made by board resolution chaired by the Company chairman and founder.'
        };
    },

    getClause6: () => {
        return {
            number: 6,
            title: 'Non-Competition & Confidentiality',
            subsections: [
                {
                    number: '6.1',
                    text: 'Each of the beneficiaries agrees that from the date hereof and for as long as the beneficiary holds UPAP Slots, they will not engage or be interested, whether as principal, agent, consultant, employee, or otherwise, in any trade, occupation, or business competing directly or indirectly with the business of the Company without prior written consent of the other beneficiary or as otherwise provided in this Agreement.'
                },
                {
                    number: '6.2',
                    text: 'Each of the beneficiaries agrees that they or any of their affiliates shall not, for a period of two (2) years following their ceasing to be a beneficiary in the Company, on the beneficiary\'s behalf or on behalf of any third party with whom the beneficiary may be associated (whether as partner, director, employee, consultant, or otherwise), engage or be interested, whether as principal, agent, consultant, employee, or otherwise, in any trade, occupation, or business competing directly or indirectly with the business of the Company without prior written consent of the other beneficiary.'
                },
                {
                    number: '6.3',
                    text: 'Each of the beneficiaries agrees that they will not, for a period of one (1) year following their ceasing to be a beneficiary in the Company, on the beneficiary\'s behalf or on behalf of any third party with whom the beneficiary may be associated (whether as partner, director, employee, consultant, or otherwise), solicit or employ any person who was an employee of the Company or a subsidiary of the Company at any time during the twelve months prior to the date of ceasing.'
                },
                {
                    number: '6.4',
                    text: 'Each of the beneficiaries shall keep confidential all information (written or oral) concerning the business and affairs of the Company or any subsidiary or the Company or the other beneficiary that the beneficiary has obtained or received as a result of the discussions leading to the entering into or implementation of this Agreement or the beneficiary\'s association with the Company or any subsidiary of the Company, save for information which is: (a) Trivial or obvious; (b) Obtained lawfully and other than as a result of breach of this Clause from third parties; or (c) In the public domain other than as a result of a breach of this Clause.'
                },
                {
                    number: '6.5',
                    text: 'A beneficiary ceasing to be a beneficiary of the Company shall hand over to the Company within a period of seven (7) days all correspondence, budgets, schedules, documents, papers, and records belonging to or relating to the business of the Company, provided that a beneficiary may keep copies of documents that are required for compliance with a statutory requirement and shall thereafter keep confidential all information, including without limitation copies of documents and materials relating to the Company or its business and affairs.'
                }
            ]
        };
    },

    getClause7: () => {
        return {
            number: 7,
            title: 'Effective Date, Term, and Termination',
            subsections: [
                {
                    number: '7.1',
                    text: 'This Agreement shall enter into effect as of the date of the last signature or digital acceptance of any Party hereto.'
                },
                {
                    number: '7.2',
                    text: 'This Agreement shall remain in force for as long as the beneficiaries or their successors in title continue to own UPAP slot(s) of the Company unless terminated by mutual agreement in writing by the Company.'
                },
                {
                    number: '7.3',
                    text: 'The obligations of each beneficiary under this Agreement shall continue for as long as the beneficiary remains a holder of UPAP Slots(s) in the Company; upon ceasing to be a beneficiary in the Company under the provisions of this Agreement, the obligations herein shall cease and determine, save for any provision hereof which in relation to the beneficiary is expressly or by implication intended to continue in force after such cessation.'
                }
            ]
        };
    },

    getClause8: () => {
        return {
            number: 8,
            title: 'Notices',
            subsections: [
                {
                    number: '8.1',
                    text: 'Any notice required or permitted to be given hereunder must be in writing and delivered to the Company\'s address specified in this agreement, sent by registered mail with prepaid postage, or via the support email address: support@cc2-28.com.'
                },
                {
                    number: '8.2',
                    text: 'Notwithstanding anything to the contrary contained or implied anywhere in this Agreement, the Company shall not be expected to or be obliged to recognize as the owner, whether beneficially or otherwise, of any UPAP Slot(s) anybody other than the person who is registered as the holder of those UPAP Slot(s).'
                }
            ],
            supportEmail: 'support@cc2-28.com'
        };
    },

    getClause9: () => {
        return {
            number: 9,
            title: 'Assignment',
            subsections: [
                {
                    number: '9.1',
                    text: 'Save as otherwise expressly provided under this Agreement, all rights and obligations hereunder are personal to the Parties hereto and may not be assigned at law.'
                },
                {
                    number: '9.2',
                    text: 'This Agreement shall be binding upon and inure to the benefit of the Parties hereto and their respective next of kin.'
                }
            ]
        };
    },

    getClause10: () => {
        return {
            number: 10,
            title: 'Force Majeure',
            subsections: [
                {
                    number: '10.1',
                    text: 'Neither Party shall be liable for delay in performance of the Party\'s responsibilities herein where any such failure or delay is beyond the Party\'s control and may be caused by an act of God, trade restrictions, blockades, war or consequences of war, fire, flood, natural calamity, riot, civil commotion, epidemic, plague, accident, or any other similar extraordinary cause beyond the reasonable control of the Parties seeking to rely on this Clause.'
                },
                {
                    number: '10.2',
                    text: 'Where the event of force majeure subsists for a duration longer than thirty (30) days, the Party seeking to rely on such event of force majeure shall give the other Parties a notice in writing specifying the commencement of such event and the Parties shall mutually agree upon the further course of action.'
                },
                {
                    number: '10.3',
                    text: 'If no mutually agreed resolution is reached within sixty (60) days of commencement of the force majeure event, the matter will be referred to arbitration in accordance with the provisions of this Agreement.'
                }
            ]
        };
    },

    getClause11: () => {
        return {
            number: 11,
            title: 'Governing Law & Dispute Resolution',
            subsections: [
                {
                    number: '11.1',
                    text: 'Any dispute, controversy, or claim arising out of or relating to or in the course of performance of this Agreement or the breach, termination, or validity hereof or as to the interpretation of any Clause or provision of this Agreement, the Parties hereto agree that within 30 days after service by one Party on the others of notice of the dispute to refer such dispute for resolution by a single arbitrator appointed by the Company.'
                },
                {
                    number: '11.2',
                    text: 'The arbitrator appointed pursuant hereto shall be an Advocate who has practiced as such for a period of not less than two years after qualification or any company member chosen by the Company board of directors who shall have worked with the Company for a period of two years.'
                },
                {
                    number: '11.3',
                    text: 'The arbitration shall be conducted in the English language and the venue of the arbitration shall be Uganda.'
                },
                {
                    number: '11.4',
                    text: 'The decision of the Company shall be final and binding on all Parties.'
                }
            ]
        };
    },

    getClause12: () => {
        return {
            number: 12,
            title: 'Authorization',
            text: 'The Company is authorized to enter into this understanding and make such terms and conditions for the UPAP slot(s) holders as known as beneficiaries by virtue of the resolution of the Board of Directors.'
        };
    },

    getAcceptance: () => {
        return {
            title: 'Acceptance of Terms',
            message: 'By accepting these Terms and Conditions, you acknowledge that you have read, understood, and agree to be bound by all the provisions contained herein. Your beneficiary status confirms your acceptance of these terms.',
            footerMessage: 'For any questions regarding these Terms and Conditions, please contact us at:',
            contactEmail: 'support@cc2-28.com'
        };
    },

    getConclusion: () => {
        return {
            message: 'Through the Universal Poverty Alleviation Programme, we are committed to transparency, fairness, and the economic empowerment of all beneficiaries.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStats: () => {
        return {
            totalClauses: 12,
            totalSubsections: 35,
            variantsCount: 2,
            supportEmail: 'support@cc2-28.com',
            arbitrationVenue: 'Uganda'
        };
    },

    processTermsForm: (formData) => {
        const { email, name, acceptance, questions } = formData;
        
        if (acceptance && acceptance !== 'true' && acceptance !== true) {
            return {
                success: false,
                message: 'You must accept the Terms and Conditions to proceed.'
            };
        }
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Terms page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for accepting the Terms and Conditions. Your acceptance has been recorded.'
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'UPAP Full Document', url: '/resources/upap-terms.pdf', icon: 'fa fa-file-pdf-o' },
            { title: 'Beneficiary Guide', url: '/resources/beneficiary-guide.pdf', icon: 'fa fa-book' },
            { title: 'Frequently Asked Questions', url: '/resources/upap-faq.pdf', icon: 'fa fa-question-circle' },
            { title: 'Contact Support', url: '/contact', icon: 'fa fa-envelope' }
        ];
    }
};

module.exports = termsService;