import * as SelectPrimitive from '@radix-ui/react-select';

import AppSelectTrigger from '@/components/AppSelect/components/AppSelectTrigger';
import AppSelectContent from '@/components/AppSelect/components/AppSelectContent';
import AppSelectLabel from '@/components/AppSelect/components/AppSelectLabel';
import AppSelectItem from '@/components/AppSelect/components/AppSelectItem';
import AppSelectSeparator from '@/components/AppSelect/components/AppSelectSeparator';
import AppSelectScrollUpButton from '@/components/AppSelect/components/AppSelectScrollUpButton';
import AppSelectScrollDownButton from '@/components/AppSelect/components/AppSelectScrollDownButton';

const AppSelect = SelectPrimitive.Root;

export default Object.assign(AppSelect, {
  Group: SelectPrimitive.Group,
  Value: SelectPrimitive.Value,
  Trigger: AppSelectTrigger,
  Content: AppSelectContent,
  Label: AppSelectLabel,
  Item: AppSelectItem,
  Separator: AppSelectSeparator,
  ScrollUpButton: AppSelectScrollUpButton,
  ScrollDownButton: AppSelectScrollDownButton,
});
