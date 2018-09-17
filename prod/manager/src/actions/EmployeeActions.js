import { EMPLOYEE_UPDATE 
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};