import { IFeedback } from 'app/businessObjects';
import { ServiceContext } from 'components/providers/ServiceProvider';
import React from 'react';
import { FeedbackElement } from './FeedbackElement';
import styles from './Feedbacks.module.scss';

/**
 * Shows Feedbacks
 */
export const Feedbacks: React.FC = () => {

  const [feedbacks, setFeedbacks] = React.useState<IFeedback[]>([]);
  const { feedbackService } = React.useContext(ServiceContext);

  /**
   * On mount load feedbacks
   */
  React.useEffect(() => {
    let didCancel = false;

    feedbackService.getAllFeedbacks()
      .then(x => !didCancel && setFeedbacks(x));

    return () => {
      didCancel = true;
    };
  }, [feedbackService]);

  return <section className={styles.grid}>
    {feedbacks.map(x =>
      <FeedbackElement
        key={x.id}
        {...x}
      />)}
  </section>;
};
