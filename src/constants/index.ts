export interface krList {
  id: number;
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
    placeholder: `Enter your key objectives and key results here, separated by a comma. For example: Increase website traffic by 50%, Launch new product by Q3, Improve customer satisfaction score to 90%.`
  }, 
  keyResults: {
    mock: [
      { id: 1, result: "Learn the fundamentals of DevOps within the next 2 months by completing an online course with a minimum score of 90%." },
      { id: 1, result: "Build a pipeline for a simple application deployment within the next 3 months, using popular tools like Jenkins or GitLab." },
      { id: 1, result: "Collaborate with a team on a complex DevOps project within the next 6 months, utilizing containerization technologies like Docker and Kubernetes." },
      { id: 1, result: "Obtain certification in at least one popular DevOps tool or technology within the next 9 months, such as AWS or Terraform, to demonstrate proficiency to potential employers." },
    ]
  }
};