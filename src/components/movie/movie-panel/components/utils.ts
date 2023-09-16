import { log } from "console";
import { min, set } from "date-fns";
import colors from "tailwindcss/colors";


type formatProvidersProps = {
  searchParams: URLSearchParams;
  selectedProviders: number[];
  id: number;
}




type FlyAwayProps = {
  x: number;
  id: number;
  posterRef: any;
  getVote: any;
  controls: any;
  setControlled: any;
  setHasVoted: any;
  minValue: number;
  controlled: boolean;
  posterX: number;
  setDragState: any;
  hasVoted: any;
}

export const formatProviders = ({searchParams, selectedProviders, id }: formatProvidersProps) => {
    const allParams = searchParams.entries();
    const obj = Object.fromEntries(allParams);

    if (selectedProviders.includes(id)) {
      const filteredProviders = selectedProviders.filter(
        (providerId) => providerId !== id,
      );
      if (filteredProviders.length) {
        obj.providers = filteredProviders.join("|");
      } else {
        delete obj.providers;
      }
    } else {
      obj.providers = [...selectedProviders, id].join("|");
    }

    return new URLSearchParams(obj);
}

type GetDragDirectionProps = {
  x: number;
  itsDraggable: boolean;
  posterX: number;
  hasVoted: any;
  minValue: number;
  setDragState: any;
};

export const getDragDirection = ({
  x,
  posterX,
  minValue,
  itsDraggable,
  hasVoted,
  setDragState,
}: GetDragDirectionProps) => {
  if (!itsDraggable || hasVoted?.voted) {
    return;
  }  

  console.log("x", x);
  console.log("posterX", posterX);

  if (x > posterX + minValue ) {
    setDragState("right");
  } else if (x < posterX - minValue) {
    setDragState("left");
  } else {
    setDragState("center");
  }
  
  
};




export const flyAway = ({ x, id, posterRef, getVote, controls, setControlled, controlled, hasVoted, setHasVoted, posterX, minValue, setDragState }: FlyAwayProps) => {

  const flyAwayDistance = (direction: string) => {
    setTimeout(() => {
      getVote({direction, id, controlled, setControlled, hasVoted, setHasVoted});
      setDragState("center");
    }, 500)
    return direction === "left" ? -2000 : 2000;
  };

  if (x > posterX + minValue) {
    controls.start({
      x: flyAwayDistance("right"),
    });
    setControlled(false);
    setDragState("right");
  } else if (x < posterX - minValue) {
    controls.start({
      x: flyAwayDistance("left"),
    });
    setControlled(false);
    setDragState("left");
  } else {
    setDragState("center");
    return 
  }
  

};


type GetVoteProps = {
  setControlled: any;
  id: number;
  setHasVoted: any;
  hasVoted: any;
  direction: string;
}

export const getVote = ({ setControlled, id, setHasVoted, hasVoted, direction}: GetVoteProps ) => {
  setControlled(true);
  if (hasVoted?.voted) {
    return;
  }

  if (direction === "right") {
    console.log("viewed");
  } else {
    console.log("not viewed");
  }

  setHasVoted({
    voted: true,
    movie: id,
  });
};


export const stateVariants = {
  left: {
    opacity: 0.20,
    backgroundColor: colors.red[400],
    transition: {
      type: "spring",
      bounce: 0.5,
    }
  },
  right: {
    opacity: 0.20,
    backgroundColor: colors.green[400],
    transition: {
      type: "spring",
      bounce: 0.5,
    }
  },
  center: {
    opacity: 0,
  },
}

