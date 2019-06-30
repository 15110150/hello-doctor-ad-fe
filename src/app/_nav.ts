export const navItems = [
  {
    name: 'Trang chủ',
    url: '/home/home',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'Admin'
    }
  },
  {
    title: true,
    name: 'Quản lý'
  },
  {
    name: 'Quản lí bác sĩ',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Chờ xác nhận',
        url: '/menu/doctor/list-waiting',
        icon: 'icon-puzzle'
      },
      {
        name: 'Danh sách',
        url: '/menu/doctor/list',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Quản lí người dùng',
    url: '/menu/patient/list',
    icon: 'icon-cursor',
  },
  {
    name: 'Quản lí lịch hẹn',
    url: '/menu/booking/list',
    icon: 'icon-cursor',
  },
  {
    name: 'Quản lí marketing',
    url: '/campaign',
    icon: 'icon-star',
    children: [
      {
        name: 'Chiến dịch SMS',
        url: '/campaign/app-email-campaign',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Chiến dịch Email',
        url: '/campaign/app-sms-campaign',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Thống kê',
    url: '/menu/statistical/list',
    icon: 'icon-pie-chart',
  },
  {
    name: 'Khuyến mãi',
    url: '/menu/statistical/list',
    icon: 'icon-pie-chart',
  },
  {
    divider: true
  }
];

