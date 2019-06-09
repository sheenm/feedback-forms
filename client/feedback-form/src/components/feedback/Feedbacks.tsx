import { IFeedback } from 'app/businessObjects';
import { ServiceContext } from 'components/providers/ServiceProvider';
import React from 'react';
import { FeedbackElement } from './FeedbackElement';
import { FeedbackFilter } from './FeedbackFilter';
import styles from './Feedbacks.module.scss';

/**
 * Shows Feedbacks
 */
export const Feedbacks: React.FC = () => {

  const [feedbacks, setFeedbacks] = React.useState<IFeedback[]>([]);
  const { feedbackService } = React.useContext(ServiceContext);
  const [filter, setFilter] = React.useState('');

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
    <FeedbackFilter changeFilter={setFilter} />

    {feedbacks
      .filter(x => x.whatLikesMore.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || filter === '')
      .map(x =>
        <FeedbackElement
          key={x.id}
          {...x}
        />)}
  </section>;
};
