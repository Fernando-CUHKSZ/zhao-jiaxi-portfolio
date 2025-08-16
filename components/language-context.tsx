'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.research': 'Research',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.honors': 'Honors',
    'nav.contact': 'Contact',
    'nav.chinese': '中文',
    'nav.english': 'English',
    
    // Hero section
    hero: {
      greeting: "Hi, I'm",
      name: "Zhao Jiaxi",
      title: "AI Product Manager & Full-Stack Developer",
      subtitle: "Specializing in AI-driven product innovation, multi-agent systems, and end-to-end solution development",
      description: "Passionate about transforming complex AI technologies into user-friendly products that drive real-world impact and business value.",
      cta: "Learn More",
      downloadCV: "Download CV",
      resume: "Download Resume",
      award1: "2023 China College Student Self-Improvement Star",
      award2: "Global Top 10 in Shenzhen International FinTech Competition",
      award3: "4th Place Globally in Sony China College Student Innovation Contest",
    },
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'AI Product Manager specializing in generative applications and multi-agent systems deployment. Currently pursuing my Master\'s degree at Southern University of Science and Technology, focusing on transforming cutting-edge AI research into practical business solutions.',
    'about.paragraph1': 'With a strong foundation in both technical implementation and product strategy, I bridge the gap between complex AI technologies and user-friendly applications. My experience spans from developing federated learning systems to creating innovative AI-powered consumer products.',
    'about.paragraph2': 'I have led cross-functional teams in delivering award-winning projects, including the Sony AurionX AI television system that secured global recognition and the FATE federated learning industrial monitoring system that achieved top-10 placement in international fintech competitions.',
    'about.paragraph3': 'My approach combines deep technical understanding with strategic business thinking, enabling me to identify market opportunities and translate them into scalable AI solutions that create meaningful impact for users and businesses alike.',
    'about.paragraph4': 'I am passionate about the intersection of AI innovation and practical application, constantly exploring how emerging technologies can solve real-world problems and drive digital transformation across industries.',
    'about.coreSkills': 'Core Skills',
    'about.coreCourses': 'Core Courses',
    'about.readMore': 'Read More',
    'about.showLess': 'Show Less',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewDetails': 'View Details',
    'projects.hideDetails': 'Hide Details',
    'projects.viewFullProject': 'View Full Project',
    
    // Project titles and descriptions (English)
    'projects.idtc3rd-competition.title': 'Industrial Digital Twin Competition (3rd Edition)',
    'projects.idtc3rd-competition.subtitle': 'Computer Vision & Industrial Data Science | SUSTech Team | 2024.06–2024.12',
    'projects.idtc3rd-competition.summary': 'Competition project for the Third China Industrial Internet Competition — Industrial Internet + Digital Twin Track, hosted by MIIT and others and jointly undertaken by CAICT and the Wuhu Municipal People\'s Government; built an integrated digital twin solution for precision casting with vision-based defect detection and process optimization.',
    'projects.jobbot-pro.title': 'JobBot Pro × ERNIE AI',
    'projects.jobbot-pro.subtitle': 'AI-Driven Job Application Platform | Baidu ERNIE AI Innovation Contest | 2024.03–2024.12',
    'projects.jobbot-pro.summary': "Developed for Baidu's 'Wenxin Cup' Entrepreneurship Competition (ERNIE AI Application Innovation) organized by Baidu, focusing on AIGC and large-model application innovation; a multi-agent platform for end-to-end job application automation with LLM orchestration and ATS integration.",
    'projects.sony-aurionx.title': 'Sony AurionX',
    'projects.sony-aurionx.subtitle': 'Sony China Corporate Strategy Office University Student Innovation Contest Global Bronze | 2023.04–2024.06',
    'projects.sony-aurionx.summary': 'Developed for the Sony China University Student Innovation Competition hosted by Sony (China) Co., Ltd., with Jiangjixin (Shanghai) Entrepreneurship Incubation Management Co., Ltd. as co-organizer; ChatGPT + sensors + AIGC create personalized large-screen experiences.',
    'projects.federated-learning.title': 'Federated Learning Device Monitoring & Credit Optimization',
    'projects.federated-learning.subtitle': 'WeBank & Shenzhen Qianhai International FinTech Research Institute Global Top 10 | 2024.05–2024.12',
    'projects.federated-learning.summary': 'Competition project for the Shenzhen International FinTech Competition — strategically guided by the Shenzhen Municipal Financial Regulatory Bureau, Nanshan District People\'s Government, and Futian District People\'s Government, and jointly organized by the SZU WeBank Institute of FinTech, WeBank, and the Shenzhen Xiangmihu International FinTech Research Institute; FATE-based industrial equipment health monitoring, predictive maintenance, and credit optimization.',
    'projects.bain-consulting.title': 'Bain & Company Management Consulting Case Competition',
    'projects.bain-consulting.subtitle': 'Strategic Business Analysis & Consulting Case Study | 2024',
    'projects.bain-consulting.summary': 'Management consulting case competition organized by Bain & Company and the Peking University Consulting Association; delivered structured problem-solving, market sizing, and strategic recommendation presentations.',
    'projects.idtc-competition.title': '2nd Industrial Digital Twin Competition',
    'projects.idtc-competition.subtitle': 'Multi-factor CNC Machine Tool Error Modeling & Compensation | National Second Prize | 2022.09–2023.01',
    'projects.idtc-competition.summary': 'Competition project for the 2nd Industrial Digital Twin Competition jointly hosted by CAICT and the Wuhu Municipal People\'s Government and undertaken by the Wuhu Bureau of Economy and Information Technology; digital twin-based CNC machine thermal error modeling and compensation (National Second Prize).',
    'projects.wis-brand-strategy.title': 'WIS Face Mask Brand Differentiation Enhancement Project',
    'projects.wis-brand-strategy.subtitle': 'Brand Strategy & Operations Planning Project Lead | 2024',
    'projects.wis-brand-strategy.summary': 'Multi-channel brand differentiation strategy through cross-industry collaboration and innovative packaging design.',
    
    // Project tags and functions (English)
    'projects.idtc3rd-competition.tags': 'Computer Vision,Digital Twin,Industrial AI,Machine Learning',
    'projects.idtc3rd-competition.functions': 'Defect Detection,Process Optimization,Quality Control,Data Analytics',
    'projects.jobbot-pro.tags': 'Multi-Agent Systems,LLM,RAG,Automation',
    'projects.jobbot-pro.functions': 'Resume Generation,Application Tracking,Interview Preparation,Job Matching',
    'projects.sony-aurionx.tags': 'ChatGPT,AIGC,IoT Sensors,Smart TV',
    'projects.sony-aurionx.functions': 'Voice Interaction,Content Generation,Personalized Experience,Multi-modal Input',
    'projects.federated-learning.tags': 'Federated Learning,FATE,FinTech,Industrial IoT',
    'projects.federated-learning.functions': 'Health Monitoring,Predictive Maintenance,Privacy Protection,Credit Optimization',
    'projects.bain-consulting.tags': 'Strategy Consulting,Business Analysis,Case Study',
    'projects.bain-consulting.functions': 'Market Analysis,Strategic Planning,Problem Solving,Presentation',
    'projects.idtc-competition.tags': 'CNC Machining,Error Modeling,Digital Twin,Thermal Analysis',
    'projects.idtc-competition.functions': 'Error Compensation,Precision Control,Thermal Prediction,Manufacturing Optimization',
    'projects.wis-brand-strategy.tags': 'Brand Strategy,Marketing,Package Design,Cross-industry Collaboration',
    'projects.wis-brand-strategy.functions': 'Brand Positioning,Market Research,Design Innovation,Channel Strategy',
    
    // Experience Section
    'experience.title': 'Work Experience',
    'experience.achievements': 'Key Achievements',
    'experience.skills': 'Technologies & Skills',
    'experience.visitWebsite': 'Visit Company Website',
    'experience.viewDetails': 'View Experience Details',
    
    // Experience Details
    'exp.cyberorigin.company': 'CyberOrigin (Shenzhen) Technology Co., Ltd.',
    'exp.cyberorigin.role': 'Product Manager & Operations Manager',
    'exp.cyberorigin.description': 'AI technology company founded by Professor Peng Yin from City University of Hong Kong, specializing in practical implementation of general-purpose robotics and high-precision data collection, processing, and annotation solutions.',
    'exp.cyberorigin.achievement1': 'Led product strategy and go-to-market planning for AI-powered robotics solutions',
    'exp.cyberorigin.achievement2': 'Brand strategy upgrade and official website redesign (cyberorigin.ai)',
    'exp.cyberorigin.achievement3': 'Major client acquisition: Partnership with Schaeffler Group for Shanghai data center project',
    'exp.cyberorigin.achievement4': 'Multi-channel marketing campaigns and product enablement materials development',
    
    'exp.cnnc.company': 'CNNC Shenzhen Kaili Group Co., Ltd.',
    'exp.cnnc.role': 'Technical Quality Informatization Intern',
    'exp.cnnc.description': 'Technical quality informatization role focused on group innovation and compliance management, responsible for data processing and report automation using Excel/Power BI/SQL/Python, innovation achievement and intellectual property ledger management, and SD-WAN network solution verification and compliance support based on Packet Tracer, driving data governance and process digitalization implementation.',
    'exp.cnnc.achievement1': 'Advanced Excel functions and Power BI for data processing and intelligent report generation',
    'exp.cnnc.achievement2': 'SQL and Python Pandas for innovation achievement data management',
    'exp.cnnc.achievement3': 'Legal review and compliance management of intellectual property service contracts',
    'exp.cnnc.achievement4': 'SD-WAN intelligent network solution design and testing using Cisco Packet Tracer',
    
    'exp.sustech.company': 'Southern University of Science and Technology School of System Design & Intelligent Manufacturing',
    'exp.sustech.role': 'Research Assistant (Systems Engineering)',
    'exp.sustech.description': 'SUSTech is one of China\'s pilot universities with new institutional mechanisms. The School of System Design & Intelligent Manufacturing focuses on interdisciplinary research combining "Systems Engineering + Intelligent Manufacturing + Design Innovation," cultivating interdisciplinary talents for intelligent hardware and industrial digitalization scenarios. Served as research assistant in systems engineering, participating in multimodal RAG and digital twin related research projects and competition guidance.',
    'exp.sustech.achievement1': 'Guided national-level undergraduate innovation project "Intelligent Scalp Care" (only selected project in the school)',
    'exp.sustech.achievement2': 'Patent application guidance: Adaptive scalp massage method invention patent and design patent',
    'exp.sustech.achievement3': 'Guided Industrial Digital Twin Competition for 2 consecutive years (National Third Prize for two consecutive years)',
    'exp.sustech.achievement4': 'Participated in ZTE horizontal research project, researching multimodal knowledge-driven RAG applications',
    
    'exp.microconnect.company': 'MicroConnect (Shenzhen) Co., Ltd.',
    'exp.microconnect.role': 'System Solutions Intern',
    'exp.microconnect.description': 'FinTech and data infrastructure platform for physical merchants, providing transaction risk control, data middle platform, and investment and financing services. Participated in video stream and merchant operational data verification and reconciliation, data quality assessment and visualization analysis in the system solutions role, supporting business strategy and product improvement.',
    'exp.microconnect.achievement1': 'Video stream data validation using SQL complex queries and Python Pandas processing',
    'exp.microconnect.achievement2': 'Data analysis and comparison between video backend system and merchant SAAS operational data',
    'exp.microconnect.achievement3': 'Project coordination using Jira and Microsoft Teams, enhancing team collaboration',
    'exp.microconnect.achievement4': '15% improvement in data accuracy, identified 5 cases of merchant data concealment/fraud',
    
    // Research Section
    'research.title': 'Research',
    
    // Education Section
    'education.title': 'Education',
    'education.sustech.institution': 'Southern University of Science and Technology',
    'education.sustech.role': 'Research Assistant',
    'education.sustech.period': '2023-2025',
    'education.sustech.location': 'Shenzhen',
    'education.sustech.tag': 'Double First-Class',
    'education.cuhksz.institution': 'The Chinese University of Hong Kong, Shenzhen',
    'education.cuhksz.role': 'Visiting Student',
    'education.cuhksz.program': 'Information Management and Business Analytics',
    'education.cuhksz.period': '2024-2025',
    'education.cuhksz.location': 'Shenzhen',
    'education.cuhksz.tag': 'QS32',
    'education.gdtc.institution': 'Guangdong University of Technology',
    'education.gdtc.program': 'Network Engineering',
    'education.gdtc.period': '2020-2024',
    'education.gdtc.location': 'Zhaoqing',
    'education.gdtc.programTag': 'Provincial First-Class Program',
    'education.coreCourses': 'Visiting Program: Information Management and Business Analytics\nCore Courses: Generative AI and Business Applications, Big Data Analytics, Systems Analysis and Design, Business Intelligence Programming, Project Management, AI in Management Decision Making, Blockchain Technology and Applications, Natural Language Processing and Text Learning, Quantitative Decision Models',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.categories.ai': 'AI & Machine Learning',
    'skills.ai.llm': 'Large Language Models',
    'skills.ai.multiAgent': 'Multi-Agent Systems',
    'skills.ai.rag': 'RAG & Knowledge Graphs',
    'skills.categories.compliance': 'Compliance & Risk',
    'skills.compliance.gdpr': 'Data Privacy & GDPR',
    'skills.compliance.privacy': 'Privacy Protection',
    'skills.compliance.audit': 'Compliance Auditing',
    'skills.categories.federatedLearning': 'Federated Learning',
    'skills.federatedLearning.framework': 'FATE Framework',
    'skills.federatedLearning.privacy': 'Privacy-Preserving ML',
    'skills.federatedLearning.optimization': 'Distributed Optimization',
    'skills.categories.productGrowth': 'Product & Growth',
    'skills.productGrowth.strategy': 'Product Strategy',
    'skills.productGrowth.analytics': 'Growth Analytics',
    'skills.productGrowth.optimization': 'Conversion Optimization',
    'skills.categories.network': 'Network & Infrastructure',
    'skills.network.protocols': 'Network Protocols',
    'skills.network.security': 'Network Security',
    'skills.network.architecture': 'Cloud Architecture',
    'skills.categories.programming': 'Programming & Development',
    'skills.programming.python': 'Python & PyTorch',
    'skills.programming.javascript': 'JavaScript & React',
    'skills.programming.sql': 'SQL & Database',
    'skills.categories.tools': 'Tools & Platforms',
    'skills.tools.docker': 'Docker & K8s',
    'skills.tools.git': 'Git & DevOps',
    'skills.tools.aws': 'AWS & Cloud Services',
    
    // Honors Section
    'honors.title': 'Project Experience',
    'honors.projects.self-strengthening-star.title': 'China College Student Self-Improvement Star 2023',
    'honors.projects.self-strengthening-star.type': 'National Honor',
    'honors.projects.self-strengthening-star.description': 'National recognition for outstanding achievements in academics and personal development, demonstrating excellence in technological innovation and leadership.',
    'honors.projects.fate-federated-learning.title': 'FATE Federated Learning Industrial Monitoring System',
    'honors.projects.fate-federated-learning.type': 'FinTech Innovation',
    'honors.projects.fate-federated-learning.description': 'Global Top 10 in Shenzhen International FinTech Competition. Developed a privacy-preserving federated learning system for industrial equipment monitoring and credit optimization with real-time IoT data processing.',
    'honors.projects.sony-aurionx-ai.title': 'Sony AurionX AI Television System',
    'honors.projects.sony-aurionx-ai.type': 'AI Product Innovation',
    'honors.projects.sony-aurionx-ai.description': 'Global Bronze in Sony China University Student Innovation Contest. Built an intelligent TV experience integrating ChatGPT, multi-modal sensors, and AIGC to enhance user interaction and content generation.',
    'honors.projects.cnc-error-modeling.title': 'Multi-factor CNC Machine Tool Error Modeling',
    'honors.projects.cnc-error-modeling.type': 'Digital Twin Project',
    'honors.projects.cnc-error-modeling.description': 'National Second Prize in Industrial Internet + Digital Twin Competition. Led the development of comprehensive error modeling and compensation analysis, improving manufacturing accuracy by 15%.',
    'honors.projects.digital-twin-leadership.title': 'Industrial Digital Twin Competition Mentorship',
    'honors.projects.digital-twin-leadership.type': 'Mentorship & Innovation',
    'honors.projects.digital-twin-leadership.description': 'Achieved National Third Prize for two consecutive years. Guided undergraduate teams in thermo-mechanical performance evaluation and casting defect diagnosis to cultivate next-generation industrial AI talent.',
    'honors.projects.multi-agent-llm.title': 'Multi-Agent LLM Deployment Platform',
    'honors.projects.multi-agent-llm.type': 'AI Infrastructure',
    'honors.projects.multi-agent-llm.description': 'Designed and deployed scalable multi-agent LLM systems for enterprise applications, focusing on RAG optimization, agent orchestration, and real-time inference in distributed environments.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.role': 'AI Product Manager | Generative Applications & Multi-Agent Systems',
    'contact.award': '2023 China College Student Self-Improvement Star',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.born': 'Born',
    'contact.location': 'Location',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.readMore': 'Read More',
    'common.viewProject': 'View Project',
  },
  zh: {
    // Navigation
    'nav.about': '关于我',
    'nav.projects': '精选项目',
    'nav.experience': '工作经历',
    'nav.research': '成果',
    'nav.education': '教育背景',
    'nav.skills': '技能专长',
    'nav.honors': '项目经验',
    'nav.contact': '联系方式',
    'nav.chinese': '中文',
    'nav.english': 'English',
    
    // Hero section
    hero: {
      greeting: "你好，我是",
      name: "赵嘉熙",
      title: "AI产品经理 & 全栈开发工程师",
      subtitle: "专注于AI驱动的产品创新、多智能体系统和端到端解决方案开发",
      description: "拥有丰富的AI产品管理、技术研发和商业咨询经验，擅长将前沿技术转化为实际商业价值，在多个领域实现创新突破。",
      cta: "了解更多",
      downloadCV: "下载简历",
      resume: "下载简历",
      award1: "2023年中国大学生自强之星获得者",
      award2: "深圳国际金融科技大赛全球十强",
      award3: "索尼中国大学生创想大赛全球第四名",
    },
    
    // About Section
    'about.title': '关于我',
    'about.description': '运营·产品·技术·咨询多维一体的AI产品专家，深耕人工智能领域的商业化落地与价值创造。南方科技大学在读硕士，专注于将前沿AI技术转化为具有商业价值的产品解决方案。',
    'about.paragraph1': '具备丰富AI开发背景的AI产品经理，拥有大规模应用的实践经验。作为项目负责人，使用ChatGPT、Cursor、Pandas等AI库开发了基于FATE联邦学习的工业压力机健康检测与预测性维护系统，该系统在深圳国际金融科技大赛中荣获全球十强。',
    'about.paragraph2': '同时，主导SONY AurionX人工智能电视系统的设计，该项目在索尼中国大学生创想大赛中获得全球第四名，并获得索尼中国业务战略室英保黎的推荐，直接参与公司核心AI技术的研发与应用。在南方科技大学担任研究助理，积累了NLP、LLM应用及RAG等领域的实践经验。',
    'about.paragraph3': '在AIGC应用方面具有深入的经验，专注于文本生成、多智能体系统及数据分析，并不断优化技术算法，以提升生成内容的质量和准确性。职业目标：专注于AI与生成式模型方向的产品设计与落地，特别关注大模型、AIGC与多智能体系统在智能硬件与企业级系统中的融合与转化，具备技术开发+用户理解+战略规划的综合能力。',
    'about.paragraph4': '具备大模型研发和AIGC应用落地的丰富经验，熟悉数据清洗、微调训练、Prompt优化及知识库构建，能独立负责大模型的开发、部署与优化，确保模型稳定运行。精通Python开发，熟练使用Pandas、TensorFlow、PyTorch等AI工具，擅长将NLP、LLM、多智能体等技术应用于文本生成、数据分析、智能推荐等业务场景。',
    'about.coreSkills': '核心技能',
    'about.coreCourses': '核心课程',
    'about.readMore': '阅读更多',
    'about.showLess': '收起',
    
    // Projects Section
    'projects.title': '精选项目',
    'projects.viewDetails': '查看详情',
    'projects.hideDetails': '隐藏详情',
    'projects.viewFullProject': '查看完整项目',
    
    // Project titles and descriptions
    'projects.idtc3rd-competition.title': '工业数字孪生竞赛（第三届）',
    'projects.idtc3rd-competition.subtitle': '计算机视觉与工业数据科学 | 南方科技大学团队 | 2024.06–2024.12',
    'projects.idtc3rd-competition.summary': '面向第三届中国工业互联网大赛——“工业互联网+数字孪生”专业赛的参赛项目；该赛由工信部等单位主办，中国信通院与芜湖市人民政府联合承办。我们构建面向精密铸造的视觉缺陷检测与工艺优化一体化数字孪生方案。',
    'projects.jobbot-pro.title': 'JobBot Pro × 文心一言AI',
    'projects.jobbot-pro.subtitle': 'AI驱动的求职自动化平台 | 百度文心一言AI创新大赛 | 2024.03–2024.12',
    'projects.jobbot-pro.summary': '面向百度“文心杯”创新创业大赛（ERNIE AI 应用创新）打造，聚焦AIGC/大模型应用创新；多智能体求职自动化平台，支持LLM编排、ATS集成与端到端流程。',
    'projects.sony-aurionx.title': '索尼 AurionX',
    'projects.sony-aurionx.subtitle': '索尼（中国）有限公司商业战略办公室大学生创新竞赛全球铜奖 | 2023.04–2024.06',
    'projects.sony-aurionx.summary': '面向“索尼中国大学生创新竞赛”的参赛作品；赛事由索尼（中国）有限公司主办，江基新（上海）创业孵化管理有限公司协办。融合ChatGPT与传感器及AIGC，打造个性化大屏体验。',
    'projects.federated-learning.title': '联邦学习设备监控与信贷优化',
    'projects.federated-learning.subtitle': '微众银行 & 深圳香蜜湖国际金融科技研究院 深圳国际金融科技大赛全球前十 | 2024.05–2024.12',
    'projects.federated-learning.summary': '深圳国际金融科技大赛参赛项目；赛事由深圳市地方金融管理局、南山区人民政府、福田区人民政府战略指导，深圳大学微众金融科技学院、微众银行、深圳香蜜湖国际金融科技研究院联合主办。基于FATE的联邦设备健康监测与信贷优化。',
    'projects.bain-consulting.title': '贝恩公司与北京大学咨询协会主办的管理咨询案例大赛',
    'projects.bain-consulting.subtitle': '战略商业分析与咨询案例研究 | 2024',
    'projects.bain-consulting.summary': '由贝恩公司与北京大学咨询协会主办的管理咨询案例大赛；完成结构化问题拆解、市场测算与策略建议演示。',
    'projects.idtc-competition.title': '第二届工业数字孪生竞赛',
    'projects.idtc-competition.subtitle': '多因子数控机床热误差建模与补偿 | 全国二等奖 | 2022.09–2023.01',
    'projects.idtc-competition.summary': '第二届工业数字孪生竞赛参赛项目；赛事由中国信通院与芜湖市人民政府联合主办，芜湖市经信局承办。基于数字孪生的数控机床热误差建模与补偿（全国二等奖）。',
    'projects.wis-brand-strategy.title': 'WIS面膜品牌差异化提升项目',
    'projects.wis-brand-strategy.subtitle': '品牌战略与运营规划项目负责人 | 2024',
    'projects.wis-brand-strategy.summary': '通过跨行业合作和创新包装设计实现多渠道品牌差异化战略。',
    
    // Project tags and functions (English)
    'projects.idtc3rd-competition.tags': 'Computer Vision,Digital Twin,Industrial AI,Machine Learning',
    'projects.idtc3rd-competition.functions': 'Defect Detection,Process Optimization,Quality Control,Data Analytics',
    'projects.jobbot-pro.tags': 'Multi-Agent Systems,LLM,RAG,Automation',
    'projects.jobbot-pro.functions': 'Resume Generation,Application Tracking,Interview Preparation,Job Matching',
    'projects.sony-aurionx.tags': 'ChatGPT,AIGC,IoT Sensors,Smart TV',
    'projects.sony-aurionx.functions': 'Voice Interaction,Content Generation,Personalized Experience,Multi-modal Input',
    'projects.federated-learning.tags': 'Federated Learning,FATE,FinTech,Industrial IoT',
    'projects.federated-learning.functions': 'Health Monitoring,Predictive Maintenance,Privacy Protection,Credit Optimization',
    'projects.bain-consulting.tags': 'Strategy Consulting,Business Analysis,Case Study',
    'projects.bain-consulting.functions': 'Market Analysis,Strategic Planning,Problem Solving,Presentation',
    'projects.idtc-competition.tags': 'CNC Machining,Error Modeling,Digital Twin,Thermal Analysis',
    'projects.idtc-competition.functions': 'Error Compensation,Precision Control,Thermal Prediction,Manufacturing Optimization',
    'projects.wis-brand-strategy.tags': 'Brand Strategy,Marketing,Package Design,Cross-industry Collaboration',
    'projects.wis-brand-strategy.functions': 'Brand Positioning,Market Research,Design Innovation,Channel Strategy',
    
    // Experience Section
    'experience.title': '工作经历',
    'experience.achievements': '主要成就',
    'experience.skills': '技术与技能',
    'experience.visitWebsite': '访问公司网站',
    'experience.viewDetails': '查看经历详情',
    
    // Experience Details
    'exp.cyberorigin.company': '赛柏坦（深圳）科技有限公司',
    'exp.cyberorigin.role': '产品经理 & 运营经理',
    'exp.cyberorigin.description': '由香港城市大学尹鹏教授创立的AI技术公司，专注于通用机器人实用化实现和高精度数据采集、处理与标注解决方案。',
    'exp.cyberorigin.achievement1': '数字化增长：微信粉丝从500增长至15,000（+3000%），2周内单条视频播放量超100万',
    'exp.cyberorigin.achievement2': '品牌战略升级及官网设计更新（cyberorigin.ai）',
    'exp.cyberorigin.achievement3': '重大客户获取：与舍弗勒集团合作上海数据中心项目',
    'exp.cyberorigin.achievement4': '多渠道营销活动及产品赋能材料制作',
    
    'exp.cnnc.company': '中核集团深圳凯利集团有限公司',
    'exp.cnnc.role': '技术质量信息化实习生',
    'exp.cnnc.description': '面向集团创新与合规管理的技术质量信息化岗位，负责以Excel/Power BI/SQL/Python为核心的数据处理与报表自动化、创新成果与知识产权台账管理，以及基于Packet Tracer的SD-WAN网络方案验证与合规支持，推动数据治理与流程数字化落地。',
    'exp.cnnc.achievement1': '使用Excel高级函数、Power BI进行数据处理与智能报表生成',
    'exp.cnnc.achievement2': '运用SQL和Python Pandas进行创新成果数据管理',
    'exp.cnnc.achievement3': '知识产权服务合同的法务审查与合规管理',
    'exp.cnnc.achievement4': '使用Cisco Packet Tracer进行SD-WAN智能网络解决方案设计与测试',
    
    'exp.sustech.company': '南方科技大学系统设计与智能制造学院',
    'exp.sustech.role': '研究助理（系统工程）',
    'exp.sustech.description': '南方科技大学是中国内地新体制机制试点高校之一，系统设计与智能制造学院聚焦“系统工程+智能制造+设计创新”的交叉融合研究，面向智能硬件与工业数字化场景培养复合型人才。本人在院内从事系统工程方向研究助理工作，参与多模态RAG与数字孪生相关课题与竞赛指导。',
    'exp.sustech.achievement1': '指导国家级大学生创新项目"智能头皮护理"（学院唯一入选项目）',
    'exp.sustech.achievement2': '专利申请指导：自适应头皮按摩方法发明专利及外观设计专利',
    'exp.sustech.achievement3': '连续2年指导工业数字孪生竞赛（连续两年获得国家三等奖）',
    'exp.sustech.achievement4': '参与中兴横向科研项目，研究多模态知识驱动的RAG应用',
    
    'exp.microconnect.company': '滴灌通管理（深圳）有限公司',
    'exp.microconnect.role': '系统解决方案实习生',
    'exp.microconnect.description': '面向实体商户的金融科技与数据基础设施平台，提供交易风控、数据中台与投融资服务。在系统解决方案岗位参与视频流与商户运营数据的校验与对账、数据质量评估与可视化分析，支撑业务策略与产品改进。',
    'exp.microconnect.achievement1': '使用SQL复杂查询和Python Pandas处理进行视频流数据验证',
    'exp.microconnect.achievement2': '视频后台系统与商户SAAS运营数据的数据分析与对比',
    'exp.microconnect.achievement3': '使用Jira和Microsoft Teams进行项目协调，增强团队协作',
    'exp.microconnect.achievement4': '数据准确性提升15%，识别出5例商户数据隐瞒/欺诈案例',
    
    // Research Section
    'research.title': '成果',
    
    // Education Section
    'education.title': '教育背景',
    'education.sustech.institution': '南方科技大学',
    'education.sustech.role': '研究助理',
    'education.sustech.period': '2023-2025',
    'education.sustech.location': '深圳',
    'education.sustech.tag': '双一流',
    'education.cuhksz.institution': '香港中文大学（深圳）',
    'education.cuhksz.role': '访问学生',
    'education.cuhksz.program': '信息管理与商业分析',
    'education.cuhksz.period': '2024-2025',
    'education.cuhksz.location': '深圳',
    'education.cuhksz.tag': 'QS32',
    'education.gdtc.institution': '广东理工学院',
    'education.gdtc.program': '网络工程',
    'education.gdtc.period': '2020-2024',
    'education.gdtc.location': '肇庆',
    'education.gdtc.programTag': '省一流专业',
    'education.coreCourses': '访问专业：信息管理与商业分析\n核心专业课程：生成式人工智能与商业应用、大数据分析、系统分析与设计、商业智能编程、项目管理、管理决策中的人工智能、区块链技术与应用、自然语言处理与文本学习、定量决策模型',
    
    // Skills Section
    'skills.title': '技能专长',
    'skills.categories.ai': 'AI与机器学习',
    'skills.ai.llm': '大语言模型',
    'skills.ai.multiAgent': '多智能体系统',
    'skills.ai.rag': 'RAG与知识图谱',
    'skills.categories.compliance': '合规风控',
    'skills.compliance.gdpr': '数据隐私与GDPR',
    'skills.compliance.privacy': '隐私保护',
    'skills.compliance.audit': '合规审计',
    'skills.categories.federatedLearning': '联邦学习',
    'skills.federatedLearning.framework': 'FATE框架',
    'skills.federatedLearning.privacy': '隐私保护机器学习',
    'skills.federatedLearning.optimization': '分布式优化',
    'skills.categories.productGrowth': '产品增长',
    'skills.productGrowth.strategy': '产品策略',
    'skills.productGrowth.analytics': '增长分析',
    'skills.productGrowth.optimization': '转化优化',
    'skills.categories.network': '网络基础',
    'skills.network.protocols': '网络协议',
    'skills.network.security': '网络安全',
    'skills.network.architecture': '云架构',
    'skills.categories.programming': '编程开发',
    'skills.programming.python': 'Python与PyTorch',
    'skills.programming.javascript': 'JavaScript与React',
    'skills.programming.sql': 'SQL与数据库',
    'skills.categories.tools': '工具平台',
    'skills.tools.docker': 'Docker与K8s',
    'skills.tools.git': 'Git与DevOps',
    'skills.tools.aws': 'AWS与云服务',
    
    // Honors Section
    'honors.title': '项目经验',
    'honors.projects.self-strengthening-star.title': '2023年中国大学生自强之星',
    'honors.projects.self-strengthening-star.type': '国家级荣誉',
    'honors.projects.self-strengthening-star.description': '因在学术和个人发展方面的杰出成就获得国家级认可，代表了技术创新和领导能力的卓越表现。',
    'honors.projects.fate-federated-learning.title': 'FATE联邦学习工业监控系统',
    'honors.projects.fate-federated-learning.type': '金融科技创新',
    'honors.projects.fate-federated-learning.description': '深圳国际金融科技大赛全球前十。开发基于联邦学习的工业设备监控与信贷优化系统，将隐私保护机器学习与实时工业物联网数据处理相结合。',
    'honors.projects.sony-aurionx-ai.title': '索尼AurionX AI电视系统',
    'honors.projects.sony-aurionx-ai.type': 'AI产品创新',
    'honors.projects.sony-aurionx-ai.description': '索尼中国大学生创新竞赛全球铜奖。创建集成ChatGPT、多模态传感器和AIGC技术的智能电视系统，提升用户交互和内容生成体验。',
    'honors.projects.cnc-error-modeling.title': '多因子数控机床误差建模',
    'honors.projects.cnc-error-modeling.type': '数字孪生项目',
    'honors.projects.cnc-error-modeling.description': '工业互联网+数字孪生竞赛全国二等奖。领导团队开发数控机床综合误差建模与补偿分析系统，将制造精度提升15%。',
    'honors.projects.digital-twin-leadership.title': '工业数字孪生竞赛指导',
    'honors.projects.digital-twin-leadership.type': '导师与创新',
    'honors.projects.digital-twin-leadership.description': '连续两年获得全国thirds Prize。指导本科生团队进行热机械性能评估和铸造缺陷诊断，培养工业AI应用的下一代人才。',
    'honors.projects.multi-agent-llm.title': '多智能体LLM部署平台',
    'honors.projects.multi-agent-llm.type': 'AI基础设施',
    'honors.projects.multi-agent-llm.description': '为企业应用架构和部署可扩展的多智能体LLM系统，专注于RAG优化、智能体编排和分布式环境中的实时推理优化。',
    
    // Contact Section
    'contact.title': '联系方式',
    'contact.role': '运营·产品·技术·咨询多面手 | AI产品专家',
    'contact.award': '2023年中国大学生自强之星',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.born': '出生日期',
    'contact.location': '所在地',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.readMore': '阅读更多',
    'common.viewProject': '查看项目',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when changed
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const dict: any = translations[language] as any
    // 1) Try flat key lookup first
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key]
    }
    // 2) Try deep lookup with dot notation (e.g., hero.name)
    const segments = key.split('.')
    let current: any = dict
    for (const seg of segments) {
      if (current && typeof current === 'object' && seg in current) {
        current = current[seg]
      } else {
        return key
      }
    }
    return typeof current === 'string' ? current : key
  }

  const value = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}