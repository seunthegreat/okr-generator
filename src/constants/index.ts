export interface krList {
  id: string;
  result: string;
}

export interface taskListProps {
  id: string;
  resultId: string;
  result: string;
  taskList: {
    id: string;
    task: string;
  }[]
}

export interface ContentProps {
  header: {
    title: string;
    body: string;
  },
  input: {
    placeholder: string;
  },
  keyResults: {
    mock: krList[],
    taskListMock: taskListProps[]
  }
};


export const contents: ContentProps = {
  header: {
    title: 'OKR Generator',
    body: `Whether you're an established business or a startup, leveraging the power of OKRs can 
      take your success to new heights. So why wait? Start using OKRs today and see the difference 
      for yourself.`
  },
  input: {
    placeholder: `Enter your key objective. For example: Learn to trade Forex.`
  }, 
  keyResults: {
    mock: [
      { id: 'xxxdf', result: "1. Learn the fundamentals of DevOps within the next 2 months by completing an online course with a minimum score of 90%." },
      { id: 'sdrew', result: "2. Build a pipeline for a simple application deployment within the next 3 months, using popular tools like Jenkins or GitLab." },
      { id: 'dfser', result: "3. Collaborate with a team on a complex DevOps project within the next 6 months, utilizing containerization technologies like Docker and Kubernetes." },
      { id: 'sdfsdf', result: "4. Obtain certification in at least one popular DevOps tool or technology within the next 9 months, such as AWS or Terraform, to demonstrate proficiency to potential employers." },
    ],
    taskListMock: [
      { id: 'xxxdf', 
        resultId: 'xxxdf', 
        result: "1. Learn the fundamentals of DevOps within the next 2 months by completing an online course with a minimum score of 90%.", 
        taskList: [
          {
            id: "1",
            task: "Research online courses related to DevOps and identify a suitable course to enroll in."
          },
          {
            id: "2",
            task: "Set a study schedule and allocate specific times for completing course modules and assignments."
          },
          {
            id: "3",
            task: "Take detailed notes while studying and refer back to them frequently to reinforce learning."
          },
          {
            id: "4",
            task: "Join online forums or communities related to DevOps and participate in discussions to deepen understanding."
          },
          {
            id: "5",
            task: "Engage with fellow learners in the course and collaborate on assignments and projects."
          },
          {
            id: "6",
            task: "Practice applying DevOps principles to real-world scenarios using open-source tools and platforms."
          },
          {
            id: "7",
            task: "Attend webinars or events related to DevOps to gain additional insights and knowledge."
          },
          {
            id: "8",
            task: "Seek feedback from instructors or mentors on areas for improvement and work to address them."
          },
          {
            id: "9",
            task: "Set up a personal DevOps lab environment to experiment and test various DevOps tools and techniques."
          },
          {
            id: "10",
            task: "Aim to score at least 90% on course assessments and seek additional resources if needed to reinforce understanding."
          }
        ]        
      },
      { id: 'xxxdf', 
        resultId: 'sdrew', 
        result: "2. Build a pipeline for a simple application deployment within the next 3 months, using popular tools like Jenkins or GitLab.", 
        taskList: [
          {
            id: "1",
            task: "Research popular DevOps tools like Jenkins and GitLab to understand their capabilities and limitations."
          },
          {
            id: "2",
            task: "Identify the requirements of the simple application deployment pipeline, including testing, building, and deploying."
          },
          {
            id: "3",
            task: "Create a plan for the pipeline, including the steps involved, tool selection, and resource allocation."
          },
          {
            id: "4",
            task: "Set up the necessary infrastructure for the pipeline, such as the server, database, and environment variables."
          },
          {
            id: "5",
            task: "Configure the selected DevOps tool(s) to work with the pipeline and integrate with other tools as needed."
          },
          {
            id: "6",
            task: "Develop and test the pipeline in a local or staging environment to ensure it meets the requirements."
          },
          {
            id: "7",
            task: "Deploy the pipeline to the production environment and monitor it for errors or issues."
          },
          {
            id: "8",
            task: "Document the pipeline and its processes for future reference and troubleshooting."
          },
          {
            id: "9",
            task: "Seek feedback from colleagues or mentors to identify areas for improvement and work to address them."
          },
          {
            id: "10",
            task: "Continuously review and optimize the pipeline to ensure it meets the evolving needs of the application deployment process."
          }
        ]        
      },
      { id: 'xxxdf', 
        resultId: 'dfser', 
        result: "3. Collaborate with a team on a complex DevOps project within the next 6 months, utilizing containerization technologies like Docker and Kubernetes.", 
        taskList: [
          {
            id: "1",
            task: "Familiarize yourself with containerization technologies like Docker and Kubernetes and their use cases."
          },
          {
            id: "2",
            task: "Understand the project's requirements and the team's objectives for the DevOps project."
          },
          {
            id: "3",
            task: "Identify the areas of the project that can benefit from containerization and propose a plan to implement containerization."
          },
          {
            id: "4",
            task: "Collaborate with the team to design and develop a containerization strategy and architecture that aligns with the project's requirements."
          },
          {
            id: "5",
            task: "Configure and set up the necessary infrastructure for containerization, including Docker and Kubernetes clusters."
          },
          {
            id: "6",
            task: "Develop and test containerized applications and services in a staging environment."
          },
          {
            id: "7",
            task: "Integrate the containerized applications and services with the rest of the project's codebase and development pipeline."
          },
          {
            id: "8",
            task: "Collaborate with the team to continuously monitor and optimize the containerization strategy and architecture for the project."
          },
          {
            id: "9",
            task: "Communicate and collaborate effectively with the team members to ensure successful completion of the DevOps project."
          },
          {
            id: "10",
            task: "Document the containerization strategy and architecture for future reference and troubleshooting."
          }
        ]        
      },
      { id: 'xxxdf', 
        resultId: 'sdfsdf', 
        result: "4. Obtain certification in at least one popular DevOps tool or technology within the next 9 months, such as AWS or Terraform, to demonstrate proficiency to potential employers.", 
        taskList: [
          {
            id: "1",
            task: "Research popular DevOps tools and technologies, and identify the ones that are in demand and relevant to your career goals."
          },
          {
            id: "2",
            task: "Select at least one tool or technology to specialize in and obtain certification in that area."
          },
          {
            id: "3",
            task: "Develop a study plan that includes a timeline, resources, and learning goals to help you prepare for the certification exam."
          },
          {
            id: "4",
            task: "Enroll in a certification program or course that covers the material for the exam, or obtain relevant study materials such as books and online resources."
          },
          {
            id: "5",
            task: "Dedicate time each day or week to study the material and practice with hands-on exercises and simulations."
          },
          {
            id: "6",
            task: "Take practice exams to assess your knowledge and identify areas for improvement."
          },
          {
            id: "7",
            task: "Schedule and take the certification exam, and aim to achieve a passing score."
          },
          {
            id: "8",
            task: "Update your resume and professional profiles with your certification(s) to demonstrate your proficiency to potential employers."
          },
          {
            id: "9",
            task: "Continuously learn and stay up-to-date with the latest developments and trends in the tool or technology to maintain your proficiency."
          },
          {
            id: "10",
            task: "Network and connect with professionals in the DevOps field who specialize in the tool or technology to gain insights and learn from their experiences."
          }
        ]        
      },
    ]
  }
};