import React from 'react';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import {
  BannerContainer,
  Title,
  RightSection,
  AvatarWrapper,
  ProgressBadge,
  Notifications,
  NotificationsIcon
} from './TopBanner.styles';

import NotificationIcon from '../../assets/icons/notification.svg';
import AvatarPhoto from '../../assets/Avatar.png';

function TopBanner() {
  const percentage = 75;

  return (
    <BannerContainer>
      <Title>Cześć Kacper!</Title>

      <RightSection>
        <AvatarWrapper>
          <Avatar alt="User avatar" src={AvatarPhoto} />
          <CircularProgress variant="determinate" value={percentage} style={{position: 'absolute'}} />
        </AvatarWrapper>
        <ProgressBadge>Twój Profil: {`${percentage}%`}</ProgressBadge>
        <Notifications>
            <NotificationsIcon src={NotificationIcon} alt="Notifications" />
        </Notifications>
      </RightSection>
    </BannerContainer>
  );
}

export default TopBanner;
