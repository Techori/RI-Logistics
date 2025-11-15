import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", borderTop: 1, borderColor: "divider", py: 8 }}>
      <Container maxWidth="xl">

        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, fontSize: "1.75rem" }}>
            RI Logistics
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.875rem" }}>
            ISO 9001: 2015, ISO 27001: 2022 Certified Company
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.875rem" }}>
            CIN: L63090DL2011PLC221234
          </Typography>
        </Box>

        {/* Main Footer Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Services */}
          <FooterColumn title="SERVICES" items={["Express Parcel", "Warehousing", "Part Truckload", "Full Truckload"]} />

          {/* Solutions */}
          <FooterColumn
            title="SOLUTIONS"
            items={[
              "D2C Brands",
              "B2B Enterprises",
              "Part Truck Load",
              "Full truck Load",
              "3rd Party Load",
              "White Label Solution",
            ]}
          />

          {/* Partners */}
          <FooterColumn
            title="PARTNERS"
            items={["Franchise Opportunities", "Delivery Partner", "Fleet Owner", "Fleet Owner"]}
          />

          {/* Company */}
          <FooterColumn
            title="COMPANY"
            items={["About Us", "Governance", "Investor Relations", "ODR Portal", "Press Release", "Careers"]}
          />

          {/* Get in Touch */}
          <FooterColumn
            title="GET IN TOUCH"
            items={["Support", "Raise a query", "Store Locator", "Rate Calculator"]}
          />
        </Box>

        {/* Policies */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 2.5,
              fontSize: "0.95rem",
              letterSpacing: "0.5px",
            }}
          >
            POLICIES
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, md: 4 },
            }}
          >
            {["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Fraud Disclaimer", "ONDC Disclaimer"].map(
              (item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                    "&:hover": { color: "text.primary" },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function FooterColumn({ title, items }) {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          mb: 2.5,
          fontSize: "0.95rem",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {items.map((item) => (
          <Box component="li" key={item} sx={{ mb: 1.5 }}>
            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                color: "text.secondary",
                fontSize: "0.875rem",
                transition: "color 0.2s",
                "&:hover": { color: "text.primary" },
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}