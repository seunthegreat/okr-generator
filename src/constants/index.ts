export interface krList {
  id: string;
  result: string;
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
    mock: krList[]
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
    ]
  }
};