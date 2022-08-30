import React from 'react';

export const User = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>{first_name} {last_name}</h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {email}
        </p>
      </div>
    </div>
    <div className="action-svg" onClick={() => onClickInvite(id)}>
      {isInvited ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      )}
    </div>

    {/* <img 
      onClick={() => onClickInvite(id)} 
      className="action" 
      src={`/assets/images/${isInvited ? 'minus' : 'plus'}.svg`} 
      alt="Action" 
    /> */}
  </li>
);
