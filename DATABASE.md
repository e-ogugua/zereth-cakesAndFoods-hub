# Database Setup Guide

This guide provides detailed instructions for setting up the PostgreSQL database for Zereth Cakes Hub development and production environments.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## Prerequisites

- PostgreSQL 13.0 or later installed and running
- Basic knowledge of PostgreSQL commands
- Access to terminal/command line

## Local Development Setup

### 1. Install PostgreSQL

**macOS:**
```bash
# Using Homebrew
brew install postgresql

# Start PostgreSQL service
brew services start postgresql
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download and install PostgreSQL from https://postgresql.org/download/windows/

### 2. Create Database

```bash
# Connect to PostgreSQL as postgres user
sudo -u postgres psql

# Create database
CREATE DATABASE zereth_cakes_hub;

# Create user (optional - you can use your system user)
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE zereth_cakes_hub TO your_username;

# Exit PostgreSQL
\q
```

### 3. Run Schema Scripts

```bash
# From project root directory
cd /path/to/zereth-cakes-hub

# Run main schema
psql -d zereth_cakes_hub < scripts/01-create-database-schema.sql

# Optional: Add sample data
psql -d zereth_cakes_hub < scripts/02-seed-sample-data.sql
```

### 4. Verify Setup

```bash
# List tables
psql -d zereth_cakes_hub -c "\dt"

# Check if tables were created
# Should show: users, baker_profiles, categories, products, orders, etc.

# Test connection from application
npm run dev  # Should connect without errors
```

## Database Schema Overview

### Core Tables

**Users Table:**
- Customer and baker accounts
- Role-based access control
- Email verification status
- Profile information

**Products Table:**
- Marketplace inventory
- Multi-currency pricing (USD, GBP, NGN)
- Category classification
- Baker associations

**Orders Table:**
- Transaction records
- Delivery information
- Payment status tracking
- Order line items

**Baker Profiles:**
- Business information
- Service areas and delivery zones
- Rating and review aggregation
- Portfolio showcase

### Environment Variables

Update your `.env.local` file:

```bash
# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/zereth_cakes_hub"

# For development with custom user
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/zereth_cakes_hub"

# With SSL for production
DATABASE_URL="postgresql://username:password@host:5432/zereth_cakes_hub?sslmode=require"
```

## Production Database Setup

### Option 1: Vercel Postgres

1. **Enable Vercel Postgres** in your Vercel project dashboard
2. **Copy connection string** to environment variables
3. **Run schema scripts** via Vercel CLI or dashboard
4. **Configure connection pooling** for optimal performance

### Option 2: External PostgreSQL Provider

**Popular providers:**
- **AWS RDS**: Managed PostgreSQL with automatic backups
- **Google Cloud SQL**: Enterprise-grade PostgreSQL
- **DigitalOcean**: Simple managed databases
- **Railway**: Developer-friendly PostgreSQL hosting

**Setup steps:**
1. Create PostgreSQL database instance
2. Note connection credentials
3. Update production environment variables
4. Run schema scripts on production database
5. Configure SSL and connection security

### Option 3: Self-hosted PostgreSQL

1. **Provision server** with PostgreSQL installed
2. **Configure firewall** to allow connections
3. **Set up SSL certificates** for secure connections
4. **Create database and user** with limited permissions
5. **Configure automated backups** and monitoring

## Database Migration Strategy

### Development to Production

1. **Test migrations** in development environment
2. **Create migration scripts** for schema changes
3. **Backup production database** before applying changes
4. **Apply migrations** during deployment
5. **Verify data integrity** after migration

### Version Control

- Schema scripts are versioned in `scripts/` directory
- Use semantic versioning for database changes
- Document all schema modifications
- Include rollback procedures for critical changes

## Troubleshooting

### Common Issues

**Connection Refused:**
```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Start PostgreSQL service
sudo systemctl start postgresql  # Linux
brew services start postgresql   # macOS
```

**Permission Denied:**
```bash
# Check database permissions
psql -d zereth_cakes_hub -c "SELECT current_user;"

# Grant permissions if needed
GRANT ALL PRIVILEGES ON DATABASE zereth_cakes_hub TO your_username;
```

**Schema Import Errors:**
```bash
# Check if database exists
psql -l | grep zereth_cakes_hub

# Create database if missing
createdb zereth_cakes_hub

# Re-run schema
psql -d zereth_cakes_hub < scripts/01-create-database-schema.sql
```

### Performance Optimization

**Indexing:**
```sql
-- Add indexes for common queries
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_baker ON products(baker_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
```

**Connection Pooling:**
```bash
# For production, configure connection pooling
# Use PgBouncer or similar for high-traffic applications
```

**Query Optimization:**
- Use EXPLAIN ANALYZE for slow queries
- Consider partitioning for large tables
- Implement proper indexing strategy
- Monitor query performance regularly

## Backup and Recovery

### Automated Backups
```bash
# Daily backup script
pg_dump zereth_cakes_hub > backup_$(date +%Y%m%d).sql

# Compressed backup
pg_dump zereth_cakes_hub | gzip > backup_$(date +%Y%m%d).sql.gz
```

### Point-in-Time Recovery
1. **Enable WAL archiving** in postgresql.conf
2. **Configure backup schedules** using pg_basebackup
3. **Test recovery procedures** regularly
4. **Store backups** in secure, off-site locations

## Monitoring

### Database Health Checks
```sql
-- Check database size
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Check active connections
SELECT count(*) as active_connections FROM pg_stat_activity;

-- Check slow queries
SELECT * FROM pg_stat_activity WHERE state = 'active' AND now() - pg_stat_activity.query_start > interval '1 minute';
```

### Application Monitoring
- Monitor database connection pool usage
- Track query performance metrics
- Set up alerts for connection failures
- Monitor database storage usage

## Security

### Database Security Best Practices
- Use strong passwords for database users
- Implement SSL/TLS for all connections
- Regularly update PostgreSQL to latest version
- Audit database access logs
- Implement row-level security where appropriate

### Connection Security
```sql
-- Create user with limited permissions
CREATE USER app_user WITH PASSWORD 'strong_password';
GRANT CONNECT ON DATABASE zereth_cakes_hub TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO app_user;
```

## Support

For database-related issues:
- **Email**: support@zereth-cakes-hub.com
- **Documentation**: Check PostgreSQL official documentation
- **Community**: Stack Overflow and PostgreSQL forums

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
