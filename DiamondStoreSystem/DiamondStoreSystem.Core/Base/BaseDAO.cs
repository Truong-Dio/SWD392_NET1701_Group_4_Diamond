using DiamondStore.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Base
{
    public class BaseDAO<T> where T : class
    {
        protected readonly DiamondStoreDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public BaseDAO()
        {
            _context = new();
            _dbSet = _context.Set<T>();
        }

        public List<T> GetAll()
        {
            try
            {
                return _dbSet.ToList();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while retrieving all entities.", ex);
            }
        }

        public async Task<List<T>> GetAllAsync()
        {
            try
            {
                return await _dbSet.ToListAsync();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously retrieving all entities.", ex);
            }
        }

        public void Create(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while creating the entity.", ex);
            }
        }

        public async Task<int> CreateAsync(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously creating the entity.", ex);
            }
        }

        public void Update(T entity)
        {
            try
            {
                var tracker = _context.Attach(entity);
                tracker.State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while updating the entity.", ex);
            }
        }

        public async Task<int> UpdateAsync(T entity)
        {
            try
            {
                var tracker = _context.Attach(entity);
                tracker.State = EntityState.Modified;
                return await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously updating the entity.", ex);
            }
        }

        public bool Remove(T entity)
        {
            try
            {
                _dbSet.Remove(entity);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while removing the entity.", ex);
            }
        }

        public async Task<bool> RemoveAsync(T entity)
        {
            try
            {
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously removing the entity.", ex);
            }
        }

        public T GetById(int id)
        {
            try
            {
                return _dbSet.Find(id);
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while retrieving the entity by ID.", ex);
            }
        }

        public async Task<T> GetByIdAsync(int id)
        {
            try
            {
                return await _dbSet.FindAsync(id);
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously retrieving the entity by ID.", ex);
            }
        }

        public T GetById(string code)
        {
            try
            {
                return _dbSet.Find(code);
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while retrieving the entity by code.", ex);
            }
        }

        public async Task<T> GetByIdAsync(string code)
        {
            try
            {
                return await _dbSet.FindAsync(code);
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                throw new Exception("Error occurred while asynchronously retrieving the entity by code.", ex);
            }
        }
    }
}
