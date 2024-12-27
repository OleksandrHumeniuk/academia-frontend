import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

import AppAlert from '@/components/AppAlert/AppAlert';
import AppAvatar from '@/components/AppAvatar/AppAvatar';
import AppCollapse from '@/components/AppCollapse/AppCollapse';
import AppTooltip from '@/components/AppTooltip/AppTooltip';
import AppBadge from '@/components/AppBadge/AppBadge';
import AppButton from '@/components/AppButton/AppButton';
import AppCheckbox from '@/components/AppCheckbox/AppCheckbox';
import AppInput from '@/components/AppInput/AppInput';
import AppLabel from '@/components/AppLabel/AppLabel';
import AppTextarea from '@/components/AppTextarea/AppTextarea';
import AppSwitch from '@/components/AppSwitch/AppSwitch';
import AppSeparator from '@/components/AppSeparator/AppSeparator';
import AppSkeleton from '@/components/AppSkeleton/AppSkeleton';
import AppAlertDialog from '@/components/AppConfirmationDialog/AppConfirmationDialog';
import AppPagination from '@/components/AppPagination/AppPagination';
import AppRadioGroup from '@/components/AppRadioGroup/AppRadioGroup';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppCard from '@/components/AppCard/AppCard';
import useToast from '@/hooks/useToast';
import './App.css';

const App: React.FC = () => {
  const { toast } = useToast();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full max-w-[600px] flex-col items-center gap-8">
        <AppAlert>
          <Terminal className="size-4" />
          <AppAlert.Title>Test</AppAlert.Title>
          <AppAlert.Description>This is a test alert.</AppAlert.Description>
        </AppAlert>

        <AppAvatar className="size-12">
          <AppAvatar.Image src="https://avatars.githubusercontent.com/u/1529921?v=4" alt="User" />
          <AppAvatar.Fallback>US</AppAvatar.Fallback>
        </AppAvatar>

        <AppBadge>My Badge</AppBadge>

        <AppButton size="lg" onClick={() => toast({ title: 'Some toast', description: 'Lorem Ipsum' })}>
          My Button
        </AppButton>

        <AppButton size="lg" onClick={() => setIsConfirmationModalOpen(true)}>
          Open Confirmation Modal
        </AppButton>

        <AppAlertDialog
          visible={isConfirmationModalOpen}
          onOpenChange={setIsConfirmationModalOpen}
          title="Are you sure?"
          description="This action cannot be undone."
          cancelLabel="Cancel"
          actions={<AppButton variant="destructive">Confirm</AppButton>}
        />

        <AppSeparator />

        <div className="flex items-center space-x-2">
          <AppCheckbox id="terms" />
          <AppLabel htmlFor="terms">Check me</AppLabel>
        </div>

        <div className="flex items-center space-x-2">
          <AppSwitch id="asd" />
          <AppLabel htmlFor="asd">Switch me</AppLabel>
        </div>

        <AppSeparator />

        <AppCollapse>
          <AppCollapse.Trigger>Can I use this in my project?</AppCollapse.Trigger>
          <AppCollapse.Content>
            Yes. Free to use for personal and commercial projects. No attribution required.
          </AppCollapse.Content>
        </AppCollapse>

        <AppInput value="asdasd" />

        <AppTextarea value="asdasd" />

        <AppTooltip>
          <AppTooltip.Trigger>Tooltip</AppTooltip.Trigger>
          <AppTooltip.Content>
            <p>Add to library</p>
          </AppTooltip.Content>
        </AppTooltip>

        <AppSkeleton className="size-24 rounded-full" />

        <AppSeparator />

        <AppPagination>
          <AppPagination.Item>
            <AppPagination.Previous href="#" />
          </AppPagination.Item>
          <AppPagination.Item>
            <AppPagination.Link href="#">1</AppPagination.Link>
          </AppPagination.Item>
          <AppPagination.Item>
            <AppPagination.Link href="#" isActive>
              2
            </AppPagination.Link>
          </AppPagination.Item>
          <AppPagination.Item>
            <AppPagination.Link href="#">3</AppPagination.Link>
          </AppPagination.Item>
          <AppPagination.Item>
            <AppPagination.Ellipsis />
          </AppPagination.Item>
          <AppPagination.Item>
            <AppPagination.Next href="#" />
          </AppPagination.Item>
        </AppPagination>

        <AppRadioGroup>
          <div className="flex items-center space-x-2">
            <AppRadioGroup.Item value="1" id="1">
              asdasd
            </AppRadioGroup.Item>
            <AppLabel htmlFor="1">Switch me</AppLabel>
          </div>
          <div className="flex items-center space-x-2">
            <AppRadioGroup.Item value="2" id="2">
              asdasd
            </AppRadioGroup.Item>
            <AppLabel htmlFor="2">Switch me</AppLabel>
          </div>
          <div className="flex items-center space-x-2">
            <AppRadioGroup.Item value="3" id="3">
              asdasd
            </AppRadioGroup.Item>
            <AppLabel htmlFor="3">Switch me</AppLabel>
          </div>
        </AppRadioGroup>

        <AppSelect>
          <AppSelect.Trigger className="w-[180px]">
            <AppSelect.Value placeholder="Select a fruit" />
          </AppSelect.Trigger>
          <AppSelect.Content>
            <AppSelect.Group>
              <AppSelect.Label>Fruits</AppSelect.Label>
              <AppSelect.Item value="apple">Apple</AppSelect.Item>
              <AppSelect.Item value="banana">Banana</AppSelect.Item>
              <AppSelect.Item value="blueberry">Blueberry</AppSelect.Item>
              <AppSelect.Item value="grapes">Grapes</AppSelect.Item>
              <AppSelect.Item value="pineapple">Pineapple</AppSelect.Item>
            </AppSelect.Group>
          </AppSelect.Content>
        </AppSelect>

        <AppSeparator />

        <AppCard className="w-[350px]">
          <AppCard.Header>
            <AppCard.Title>Create project</AppCard.Title>
            <AppCard.Description>Deploy your new project in one-click.</AppCard.Description>
          </AppCard.Header>
          <AppCard.Content>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <AppLabel htmlFor="name">Name</AppLabel>
                  <AppInput id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </AppCard.Content>
          <AppCard.Footer className="flex justify-between">
            <AppButton variant="outline">Cancel</AppButton>
            <AppButton>Deploy</AppButton>
          </AppCard.Footer>
        </AppCard>
      </div>
    </main>
  );
};

export default App;
