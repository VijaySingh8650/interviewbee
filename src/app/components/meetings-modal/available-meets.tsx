import React from 'react';
import ModalComponent from './modal';
import { AlarmClockCheck, Calendar } from 'lucide-react';

type TypeOfPageProps = {

  open: boolean;
  handleOpen: () => void;
  scheduleTheMeet:(schedule:Date) => void;
  handleFutureModalOpen: () => void;
}

const AvailableMeets: React.FC<TypeOfPageProps> = ({open, handleOpen, scheduleTheMeet, handleFutureModalOpen}) => {
  return (
 
    <ModalComponent open={open} onOpenChange={handleOpen}>
            <div className='flex flex-col items-center gap-4'>
             
              <div className='flex flex-col items-stretch gap-4 justify-center'>
                <button onClick={()=>
                  {
                  
                    scheduleTheMeet(new Date());
                  }
                  } className='flex items-center gap-4'>
                  <AlarmClockCheck/>
                  <p>Start an instant meeting</p>
                </button>

                <button onClick={handleFutureModalOpen} className='flex items-center gap-4'>
                  <Calendar/>
                  <p>Create a meeting for later</p>
                </button>

              </div>
              
            </div>
          </ModalComponent>
      

  )
}

export default AvailableMeets;
