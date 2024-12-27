import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const AppCollapse = CollapsiblePrimitive.Root;

export default Object.assign(AppCollapse, {
  Trigger: CollapsiblePrimitive.CollapsibleTrigger,
  Content: CollapsiblePrimitive.CollapsibleContent,
});
