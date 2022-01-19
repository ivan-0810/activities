import React from 'react';
import { Field, Form, reduxForm, reset } from 'redux-form';
import { inputGroupField } from '../../components/Fields';
import { schedule } from '../../constants/schedule';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  is_schedule_timepicker_true,
  is_schedule_datepicker_true,
  erase_all_activities
} from '../../store/schedule/action';
import { get_schedule_activites } from '../../store/activities/action';
import { showError, showSucces } from '../../store/toasts/action';
import { isEmpty } from 'lodash';
import { required_gb } from '../../utills/validator';

const ScheduleForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const scheduleState = useSelector(state => state.schedule);
  const activities = useSelector(state => state.activities);
  let navigate = useNavigate();

  const submitForm = val => {
    const clickedActivites = scheduleState.activities.filter(
      activity => activity.val
    );
    if (isEmpty(clickedActivites)) {
      dispatch(showError('Please choose one activity!'));
    } else {
      const splited = val.date.split(' ');
      let newActivities;
      let obj = {
        type: clickedActivites[0].name,
        time: `${splited[3]} ${splited[4]}`
      };
      const sameDay = Object.keys(activities).includes(splited[2]);
      if (sameDay) {
        const oldArr = activities[splited[2]].dailyActivities;
        newActivities = {
          ...activities,
          [splited[2]]: {
            day: splited[2],
            weekDay: splited[0],
            month: splited[1],
            dailyActivities: [...oldArr, obj]
          }
        };
      } else {
        let arr = [];
        arr.push(obj);
        newActivities = {
          ...activities,
          [splited[2]]: {
            day: splited[2],
            weekDay: splited[0],
            month: splited[1],
            dailyActivities: arr
          }
        };
      }

      dispatch(get_schedule_activites(newActivities));
      dispatch(erase_all_activities());
      dispatch(reset('ScheduleForm'));
      dispatch(showSucces('Thank you!'));
      navigate('../', { replace: true });
    }
  };

  const handleDateFIeld = e => {
    dispatch(is_schedule_datepicker_true());
    e.target.blur();
  };
  const handleTimeFIeld = e => {
    dispatch(is_schedule_timepicker_true());
    e.target.blur();
  };

  return (
    <Form
      noValidate
      className="needs-validation row justify-content-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field
        name="duration"
        className="col-12 form-control py-4"
        groupClassName="col-12 mt-2"
        type="text"
        component={inputGroupField}
        label={schedule.schedule_form.label_duration}
        id="duration-id"
        feedback={handleTimeFIeld}
        placeholder={schedule.schedule_form.placeholder_duration}
        position=""
        inline={['eu-light px-0', 'px-0']}
        validate={[required_gb]}
      >
        <i
          className={`icon icn_dropdown icon15`}
          onClick={() => dispatch(is_schedule_timepicker_true())}
        />
      </Field>
      <Field
        name="date"
        className="form-control py-4"
        groupClassName="col-12 mt-2"
        type="text"
        component={inputGroupField}
        feedback={handleDateFIeld}
        label={schedule.schedule_form.label_date}
        placeholder={schedule.schedule_form.placeholder_date}
        id="date-id"
        position=""
        inline={['eu-light px-0', 'px-0']}
        validate={[required_gb]}
      >
        <i
          className={`icon icn_search_light icon15`}
          onClick={() => dispatch(is_schedule_datepicker_true())}
        />
      </Field>

      <div className="col-12 d-grid mt-3">
        <button
          className="btn schedule-form-btn rounded-pill bg-gray-500 ls-21 fs-14 text-white rs-medium text-uppercase"
          type="submit"
        >
          {schedule.schedule_form.button_txt}
        </button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'ScheduleForm' // a unique identifier for this form
})(ScheduleForm);
