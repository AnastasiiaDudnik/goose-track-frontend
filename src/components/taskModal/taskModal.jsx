import { Box, IconButton, Modal } from '@mui/material';
import ModalWrapper from 'components/taskModal/modal/modal';
import TaskForm from 'components/taskForm/taskForm';
import { colorsLight } from 'components/variables/colors';

const TaskModal = ({ closeModal, currentTask }) => {
  return (
    <ModalWrapper>
      <Box
        sx={{
          borderRadius: '8px',
          border: '1px solid rgba(220, 227, 229, 0.8)',
          boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
          backgroundColor: colorsLight.mainBackgroundColor,
          width: { xs: '100%', md: '396px', lg: '396px' },
          height: { xs: '100%', md: '360px', lg: '360px' },
          // width: '100%',
          // height: '100%',
          padding: 0,
        }}
      >
        <TaskForm />
      </Box>
    </ModalWrapper>
  );
};

export default TaskModal;