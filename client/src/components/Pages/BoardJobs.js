// Source: https://www.antstack.io/blog/to-do-app-with-react-beautiful-dnd/

import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// import { columnsFromBackend } from './KanbanData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { UserJobsContext } from '../../providers/UserJobsProvider';
import UserJobCard from './UserJobCard';


const Container = styled.div`
  display: flex;
`;

const TaskList = styled.div`
  
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr) ) ;
 
  background: #f3f3f3;
  width: 19.8vw;
  border-radius: 5px;
  justify-content: space-between;
  
  
`;

const TaskColumnStyles = styled.div`

  margin: 8px;
  display: flex;
  
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const JobsBoard = () => {
  const [wishLists, setWishLists] = useState([]);
  const [applieds, setApplieds] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [offerAccepted, setOfferAccepteds] = useState([]);
  const [offerRecieveds, setOfferRecieveds] = useState([]);
  const [columns, setColumns] = useState({});
  const { userJobs, updateUserJobStatus } = useContext(UserJobsContext);

  console.log(userJobs)
  useEffect(() => {
    setBoardState();
  }, [userJobs]);

  const setBoardState = () => {
    let wishlistB = userJobs.filter((p) => p.status === "wishlist")
    setWishLists(wishlistB)
    let appliedB = userJobs.filter((p) => p.status === "applied")
    setApplieds(appliedB)
    let interviewB = userJobs.filter((p) => p.status === "interview")
    setInterviews(interviewB)
    let offerRecievedB = userJobs.filter((p) => p.status === "offer recieved")
    setOfferRecieveds(offerRecievedB)
    let offerAcceptedB = userJobs.filter((p) => p.status === "offer accepted")
    setOfferAccepteds(offerAcceptedB)

    let status = {
      ['wishlist']: {
        title: 'WishList',
        jobs: wishlistB,
      },
      ['applied']: {
        title: 'applied',
        jobs: appliedB,
      },
      ['interview']: {
        title: 'interview',
        jobs: interviewB,
      },
      ['offer recieved']: {
        title: 'offer recieved',
        jobs: offerRecievedB,
      },
      ['offer accepted']: {
        title: 'offer accepted',
        jobs: offerAcceptedB,
      }

    }

    setColumns(status);

  }

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    updateUserJobStatus({ id: parseInt(draggableId), status: destination.droppableId })
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourcejobs = [...sourceColumn.jobs];
      const destjobs = [...destColumn.jobs];
      const [removed] = sourcejobs.splice(source.index, 1);
      destjobs.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          jobs: sourcejobs,
        },
        [destination.droppableId]: {
          ...destColumn,
          jobs: destjobs,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedjobs = [...column.jobs];
      const [removed] = copiedjobs.splice(source.index, 1);
      copiedjobs.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          jobs: copiedjobs,
        },
      });
    }
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId} index={index}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Title>{column.title}</Title>
                    {column.jobs.map((job, index) => (
                      <UserJobCard key={job.id} job={job} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};
export default JobsBoard;