export interface ContentProps {
  header: {
    title: string;
    body: string;
  },
  input: {
    placeholder: string;
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
  }
};