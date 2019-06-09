import { Spinner } from '@blueprintjs/core';
import { IFeedback } from 'app/businessObjects';
import { ServiceContext } from 'components/providers/ServiceProvider';
import { useCatchRequestError } from 'hooks/UseCatchRequestError';
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
  const [isError, setIsError] = React.useState(false);

  const getFeedbacks = useCatchRequestError(() => feedbackService.getAllFeedbacks(), []);

  /**
   * On mount load feedbacks
   */
  React.useEffect(() => {
    let didCancel = false;

    getFeedbacks()
      .then(x => !didCancel && setFeedbacks(x))
      .catch(_ => !didCancel && setIsError(true));

    return () => {
      didCancel = true;
    };
  }, [getFeedbacks]);

  if (isError)
    return <p>There's an error occured during request</p>;

  if (feedbacks.length === 0)
    return <Spinner />;

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
