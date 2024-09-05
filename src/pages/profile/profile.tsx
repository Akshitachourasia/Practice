import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function ProfilePage() {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          display: 'flex',
        }}
      >
        <AspectRatio
          flex
          ratio="1"
          maxHeight={182}
          sx={{ 
            minWidth: 182, 
            width: '100%', 
            maxWidth: { xs: '100%', sm: 182 } 
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt="Profile picture of Alex Morrison"
            style={{ borderRadius: '0.5rem' }}
          />
        </AspectRatio>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontSize: 'xl', fontWeight: 'lg' }}>
            Alex Morrison
          </Typography>
          <Typography
            level="body-sm"
            textColor="text.tertiary"
            sx={{ fontWeight: 'lg' }}
          >
            Senior Journalist
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Articles
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>34</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Followers
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>980</Typography>
            </div>
            <div>
              <Typography level="body-xs" sx={{ fontWeight: 'lg' }}>
                Rating
              </Typography>
              <Typography sx={{ fontWeight: 'lg' }}>8.9</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, flexDirection: { xs: 'column', sm: 'row' }, mt: 2 }}>
            {/* <Button variant="outlined" color="neutral" sx={{ flex: 1 }}>
              Chat
            </Button> */}
            <Button variant="solid" color="primary" sx={{ flex: 1 }}>
             Edit profile
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
