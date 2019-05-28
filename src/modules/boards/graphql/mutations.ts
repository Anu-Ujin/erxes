import { mutations as dealMutations } from 'modules/deals/graphql';
import { mutations as ticketMutations } from 'modules/tickets/graphql';

const dealsUpdateOrder = `
  mutation dealsUpdateOrder($stageId: String!, $orders: [OrderItem]) {
    dealsUpdateOrder(stageId: $stageId, orders: $orders) {
      _id
    }
  }
`;

const stagesUpdateOrder = `
  mutation stagesUpdateOrder($orders: [OrderItem]) {
    stagesUpdateOrder(orders: $orders) {
      _id
    }
  }
`;

const dealsChange = `
  mutation dealsChange($_id: String!) {
    dealsChange(_id: $_id) {
      _id
    }
  }
`;

export default {
  dealsAdd: dealMutations.dealsAdd,
  ticketsAdd: ticketMutations.ticketsAdd,
  dealsUpdateOrder,
  stagesUpdateOrder,
  dealsChange
};