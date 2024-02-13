import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant.js';
const UpdatePriority = (prop) => {
  const fetcher = useFetcher();

  const { order } = prop;

  return (
    <fetcher.Form method="PATCH">
      <Button click={() => (order.priority = !order.priority)} style={'w-auto'}>
        Make priority
      </Button>
      {/* <input type="hidden" name='oldPriority' value={`${order.priority}`}/> */}
    </fetcher.Form>
  );
};
export async function action(prop) {
    const {params } = prop;

  const newData = { priority: true };
   await updateOrder(params.orderId, newData);
  return null;
}
export default UpdatePriority;
